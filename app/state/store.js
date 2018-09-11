import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";

// rootReducer
import * as reducers from "./ducks";

// middlewares
import { axiosClient } from "./middlewares";
import axiosMiddleware from 'redux-axios-middleware';
// import logger from 'redux-logger';
// import { createLogger } from "./middlewares";

// Redux persist
import { persistStore, persistReducer } from 'redux-persist';
// import FilesystemStorage from 'redux-persist-filesystem-storage';
// import RNFetchBlob from 'react-native-fetch-blob';


// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// Disable Root level persistance. Now persistance is managed by each duck reducers :>
// const persistConfig = {
//     key: 'root',
//     storage: storage,
//     stateReconciler: autoMergeLevel2
// };
const rootReducer = combineReducers( reducers );
// const persistingReducer = persistReducer(persistConfig, rootReducer); // Use this reducer inside createStore to achieve Root level persistance
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
                        // logger // might be the issue for rehydration timeout
                        // createLogger( true ),
                    )
                )
            );

// const persistorConfig = {
//     storage: FilesystemStorage
// }
const persistor = persistStore(store);


export { store as store };
export { persistor as storePersistor };