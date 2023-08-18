import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import App from './App'
import AppContextProvider from './contexts/app_context'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <StrictMode>
        <Router>
            <AppContextProvider>
                <App />
            </AppContextProvider>
        </Router>
    </StrictMode>,
    document.getElementById('root')
)