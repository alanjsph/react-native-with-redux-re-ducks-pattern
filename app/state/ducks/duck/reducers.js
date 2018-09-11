import { combineReducers } from "redux";
import types from "./types";

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


/* State Shape
{
    quacking: bool,
    distance: number,
    names: array
}
*/

const quackReducer = ( state = false, action ) => {
    switch( action.type ) {
        case types.QUACK: return !state;
        default: return state;
    }
}

const distanceReducer = ( state = 0, action ) => {
    switch( action.type ) {
        case types.SWIM: return state + action.payload.distance;
        default: return state;
    }
}

const githubReducerInitialState = { repos: [], repoInfo: {}, user: {} };
const githubReducer = ( state = githubReducerInitialState, action ) => {
    switch( action.type ) {
        case types.GET_NAMES:
            return { ...state, loading: true };
        case types.GET_NAMES_SUCCESS:
            return { ...state, loading: false, repos: action.payload.data };
        case types.GET_NAMES_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching repositories'
            };

        case types.GET_REPO_INFO:
            return { ...state, loadingRepo: true };
        case types.GET_REPO_INFO_SUCCESS:
            return { ...state, loadingRepo: false, repoInfo: action.payload.data };
        case types.GET_REPO_INFO_FAIL:
            return {
                ...state,
                loadingRepo: false,
                error: 'Error while fetching repo info'
            };

        case types.GET_USER:
            return { ...state, loadingUser: true };
        case types.GET_USER_SUCCESS:
            return { ...state, loadingUser: false, user: action.payload.data };
        case types.GET_USER_FAIL:
            return {
                ...state,
                loadingUser: false,
                error: 'Error while fetching user'
            };
        default: return state;
    }
}

const persistConfig = {
    key: 'duck',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['quacking']
};

const reducer = combineReducers( {
    quacking: quackReducer,
    distance: distanceReducer,
    github: githubReducer
} );

const persistingReducer = persistReducer(persistConfig, reducer);

export default persistingReducer;