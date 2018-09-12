import { combineReducers } from "redux";
import types from "./types";

import { persistReducer } from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


/* State Shape
{
    token: string,
}
*/

const tokenReducer = ( state = '', action ) => {
    switch( action.type ) {
        case types.SET_TOKEN: return action.payload.data;
        default: return state;
    }
}

const persistConfig = {
    key: 'auth',
    storage: FilesystemStorage,
    stateReconciler: autoMergeLevel2,
    // blacklist: ['']
};

const reducer = combineReducers( {
    token: tokenReducer
} );

const persistingReducer = persistReducer(persistConfig, reducer);

export default persistingReducer;