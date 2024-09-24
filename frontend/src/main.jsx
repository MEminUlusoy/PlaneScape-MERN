import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { SnackbarProvider} from 'notistack'; 

//*App.jsx içinde Routes ve Route yapabilmek için BrowserRouter çektik ve Bildirim gözükmesi için uçuş bileti alınca SnackbarProvider yazdık. 
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider> 
  </BrowserRouter>
)
