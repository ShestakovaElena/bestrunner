import { createStore, applyMiddleware } from 'redux';
import {rootReducer, initialState} from './reducers';
import thunk from 'redux-thunk'

export default () => {
    return createStore(rootReducer, applyMiddleware(thunk));
};