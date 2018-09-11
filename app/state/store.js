import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";

// rootReducer
import * as reducers from "./ducks";

// middlewares
import { axiosClient } from "./middlewares";
import axiosMiddleware from 'redux-axios-middleware';
// import { createLogger } from "./middlewares";

// Redux persist
import { persistStore } from 'redux-persist';

const rootReducer = combineReducers( reducers );
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {duck: {github: { repos: [], repoInfo: {}, user: {} } } }
const store = createStore(
                rootReducer,
                initialState,
                composeEnhancers(
                    applyMiddleware(
                        // apiService,
                        axiosMiddleware(axiosClient),
                        thunkMiddleware,
                        // createLogger( true ),
                    )
                )
            );

const persistor = persistStore(store);


export { store as store };
export { persistor as storePersistor };