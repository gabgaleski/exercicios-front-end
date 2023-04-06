import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { personaReducer } from './reducers/index'
import thunk from 'redux-thunk';

const store = createStore(personaReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;