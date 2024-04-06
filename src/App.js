import React from 'react'
import Header from './containers/Header/Header'
import { renderRoutes } from 'react-router-config'

const App = (props) =>{
    return <div>
        <Header />
        <div>
            {renderRoutes(props.route.routes)}
        </div>
    </div>

}

export default App