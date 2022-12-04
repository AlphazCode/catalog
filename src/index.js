import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Amplify} from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsConfig from './aws-exports';
import {BrowserRouter} from 'react-router-dom'
Amplify.configure(awsConfig);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
      <AmplifyProvider>
          <App/>
      </AmplifyProvider>
      </BrowserRouter>
);
