import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerPriceHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PriceHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Product?: Product | null;
  readonly price?: number | null;
  readonly dateid?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly priceHistoryProductId?: string | null;
}

type LazyPriceHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PriceHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Product: AsyncItem<Product | undefined>;
  readonly price?: number | null;
  readonly dateid?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly priceHistoryProductId?: string | null;
}

export declare type PriceHistory = LazyLoading extends LazyLoadingDisabled ? EagerPriceHistory : LazyPriceHistory

export declare const PriceHistory: (new (init: ModelInit<PriceHistory>) => PriceHistory) & {
  copyOf(source: PriceHistory, mutator: (draft: MutableModel<PriceHistory>) => MutableModel<PriceHistory> | void): PriceHistory;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly min_price?: number | null;
  readonly max_price?: number | null;
  readonly Category?: Category | null;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly Offers?: (Offers | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productCategoryId?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly min_price?: number | null;
  readonly max_price?: number | null;
  readonly Category: AsyncItem<Category | undefined>;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly Offers: AsyncCollection<Offers>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productCategoryId?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerOffers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Offers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly url: string;
  readonly price?: number | null;
  readonly name?: string | null;
  readonly Provider?: Provider | null;
  readonly availability?: boolean | null;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly offersProviderId?: string | null;
}

type LazyOffers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Offers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly url: string;
  readonly price?: number | null;
  readonly name?: string | null;
  readonly Provider: AsyncItem<Provider | undefined>;
  readonly availability?: boolean | null;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly offersProviderId?: string | null;
}

export declare type Offers = LazyLoading extends LazyLoadingDisabled ? EagerOffers : LazyOffers

export declare const Offers: (new (init: ModelInit<Offers>) => Offers) & {
  copyOf(source: Offers, mutator: (draft: MutableModel<Offers>) => MutableModel<Offers> | void): Offers;
}

type EagerProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Provider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Provider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Provider = LazyLoading extends LazyLoadingDisabled ? EagerProvider : LazyProvider

export declare const Provider: (new (init: ModelInit<Provider>) => Provider) & {
  copyOf(source: Provider, mutator: (draft: MutableModel<Provider>) => MutableModel<Provider> | void): Provider;
}

type EagerWishlist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Wishlist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id?: string | null;
  readonly price?: number | null;
  readonly Products?: Product | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly wishlistProductsId?: string | null;
}

type LazyWishlist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Wishlist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id?: string | null;
  readonly price?: number | null;
  readonly Products: AsyncItem<Product | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly wishlistProductsId?: string | null;
}

export declare type Wishlist = LazyLoading extends LazyLoadingDisabled ? EagerWishlist : LazyWishlist

export declare const Wishlist: (new (init: ModelInit<Wishlist>) => Wishlist) & {
  copyOf(source: Wishlist, mutator: (draft: MutableModel<Wishlist>) => MutableModel<Wishlist> | void): Wishlist;
}

type EagerSysInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SysInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySysInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SysInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SysInfo = LazyLoading extends LazyLoadingDisabled ? EagerSysInfo : LazySysInfo

export declare const SysInfo: (new (init: ModelInit<SysInfo>) => SysInfo) & {
  copyOf(source: SysInfo, mutator: (draft: MutableModel<SysInfo>) => MutableModel<SysInfo> | void): SysInfo;
}