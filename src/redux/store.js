import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {registerReducer} from "./registerReducer/registerReducer";


const rootReducer = combineReducers({
    registerPage: registerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
// @ts-ignore
window.store = store;
