import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(

  //Modo estricto: Ayuda a identificar problemas con lifecircles, envia warnings, etc
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode> 
);
