import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import photos from "./photos";
import albums from "./albums";

const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootReducer = combineReducers({
    albums: albums,
    photos: photos
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;