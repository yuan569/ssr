import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Routers from'../routers/Routers.js'
import { Provider } from 'react-redux'
import {getClientStore} from '../store'



const App= () => {
    return (
        <Provider store={getClientStore()}>
            <BrowserRouter>
                <div>
                    {renderRoutes(Routers)}
                </div>
            </BrowserRouter>
        </Provider>
        
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
