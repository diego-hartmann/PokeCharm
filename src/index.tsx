import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// importing provider for data sharing
import Provider from './context/Provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    {/* wraps the whole app */}
    <Provider>
      <App />
    </Provider>

  </React.StrictMode>
);
