import 'bootstrap/dist/css/bootstrap.css';
// import VSS from './../node_modules/vss-web-extension-sdk/lib/VSS.SDK';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

// VSS.init({
//   usePlatformScripts: true,
// });

ReactDOM.render(
  // @ts-ignore
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

// VSS.notifyLoadSucceeded();
