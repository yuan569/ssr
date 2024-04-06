import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer.js'



export const getServerStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}
export const getClientStore = () => {
    const defaultState = window.context.state
    return createStore(reducer, defaultState, applyMiddleware(thunk))
}
