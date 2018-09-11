import actions from "./actions";

const simpleQuack = actions.quack
const getNames = actions.getNames
const getUser = actions.getUser
const getRepoDetail = actions.getRepoDetail

// This is a thunk which dispatches multiple actions from actions.js
const complexQuack = ( distance ) => ( dispatch ) => {
    dispatch( actions.quack( ) ).then( ( ) => {
        dispatch( actions.swim( distance ) );
        dispatch( /* any action */ );
    } );
}

export default {
    simpleQuack,
    complexQuack,
    getNames,
    getUser,
    getRepoDetail
};