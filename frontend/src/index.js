import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';



ReactDOM.render(
    <StrictMode>
      <BrowserRouter>
      <ToastContainer/>
        <App />
      </BrowserRouter>
    </StrictMode>
  ,
  document.getElementById('root')
);

