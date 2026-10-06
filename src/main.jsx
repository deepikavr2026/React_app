import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './components/Hooks/useContext/UserContext.jsx'
import { ThemeProvider } from './components/Hooks/useContext/ThemeContext.jsx'
import { store } from "./components/redux/store.js";
import {Provider} from "react-redux";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <provider store = {store}>
    <App />
    </provider>
    </UserProvider>
  </StrictMode>,
);
