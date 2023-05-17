import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from './Configurei18n/i18n.js';
import store from './redux/configureStore'
import { Provider } from "react-redux"
import {LoadingComponent} from "./Components/index"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
    <Suspense fallback={<LoadingComponent />}>
      <ContextProvider>
        <App />
      </ContextProvider>
      </Suspense>
    </I18nextProvider>
  </Provider>
);

