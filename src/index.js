import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App/>
  </AppProvider>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <AppProvider>
//       <App />
//     </AppProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
