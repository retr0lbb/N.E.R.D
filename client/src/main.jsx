import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import "./index.css";
import { GameProvider } from '../data/Provider.provider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <GameProvider>
        <App />
    </GameProvider>
)
