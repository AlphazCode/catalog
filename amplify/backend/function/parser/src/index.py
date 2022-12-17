import json
import re
import requests
from bs4 import BeautifulSoup
session = requests.Session()

APPSYNC_API_ENDPOINT_URL = "https://auxiwbvzszetbkhveqzuymya4i.appsync-api.eu-central-1.amazonaws.com/graphql"
API_KEY = "da2-t55iv7wrwje4lgayowjqajavmq"

def failedUpdateOffer(offerID,version ):
  query = 'mutation MyMutation { updateOffers(input: {id: "'+offerID+'", _version: '+version+', availability: false}) { id }}'    
  session.request( url=APPSYNC_API_ENDPOINT_URL, method='POST', headers={'x-api-key': API_KEY}  ,json={'query': query})

def parse():
  query = """
  query MyQuery {
  listOffers {
    items {
      id
      price
      url
      name
      _version
      Provider {
        id
        name
      }
    }
  }
}


  """
  response = session.request( url=APPSYNC_API_ENDPOINT_URL, method='POST', headers={'x-api-key': API_KEY}  ,json={'query': query})
  for i in response.json()['data']['listOffers']['items']:
    price = None
    product_name = None
    offerID = i['id']
    version = str(i['_version'])
    provider = str(i['Provider']['name']).strip()
    url = i['url']
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
    }
    
    page = requests.get(url, headers=headers)
    if page.status_code != 200:     
      failedUpdateOffer(offerID, version)
      continue

    soup = BeautifulSoup(page.text, "html.parser")

    if provider == 'Rozetka':
      try:
        price = soup.find('p', attrs={'class':'product-prices__big'}).text.translate({ord(i): None for i in '₴  '})
        product_name = soup.find('h1', attrs={'class':'product__title'}).text.strip().replace('"', '\"')
        if None in (price, product_name):         
          failedUpdateOffer(offerID, version)
      except AttributeError:
        failedUpdateOffer(offerID, version)
        continue

    if provider == 'F.ua':
      try:
        regex = re.compile('product_price_.*')
        price = soup.find('div', attrs={'class': regex}).text.strip().translate({ord(i): None for i in '₴  '})
        product_name = soup.find('h1').text.strip().replace('"', '\"')
        if None in (price, product_name):         
          failedUpdateOffer(offerID, version)
      except AttributeError:
        failedUpdateOffer(offerID, version)
        continue
  
    if provider == 'Moyo': 
      try: 
        price = soup.find('div', attrs={'class':'product_price_current'}).find('span').text.strip().translate({ord(i): None for i in '  грн'})               
        product_name = soup.find('h1').text.strip().replace('"', '\"')
        if None in (price, product_name):         
          failedUpdateOffer(offerID, version)
      except AttributeError:
        failedUpdateOffer(offerID, version)
        continue
    query = 'mutation MyMutation { updateOffers(input: {id: "'+offerID+'", price:'+price+', _version:'+version+', name:"'+product_name+'", availability:true}) { id price } }'

    response = session.request( url=APPSYNC_API_ENDPOINT_URL, method='POST', headers={'x-api-key': API_KEY}  ,json={'query': query})


def updatePrices():
  query = """query MyQuery {
  listProducts {
    items {
      id
      min_price
      max_price
      _version
      Offers(filter: {availability: {eq: true}}) {
        items {
          price
        }
      }
    }
  }
  }

  """
  response = session.request( url=APPSYNC_API_ENDPOINT_URL, method='POST', headers={'x-api-key': API_KEY}  ,json={'query': query})
  for product in response.json()['data']['listProducts']['items']:
    
    offers = product['Offers']['items']
    version = str(product['_version'])
    pr_id = product['id']
    if len(offers) > 0:
      prices = [i['price'] for i in offers]
      min_price, max_price = str(min(prices)), str(max(prices))
      query = 'mutation MyMutation { updateProduct(input: {id: "'+pr_id+'", min_price: '+min_price+', max_price: '+max_price+', _version:'+version+'}) {id}}'
      response = session.request( url=APPSYNC_API_ENDPOINT_URL, method='POST', headers={'x-api-key': API_KEY}  ,json={'query': query})
      


def handler(event, context):
  parse()
  updatePrices()
  
  return {
      'statusCode': 200
  }