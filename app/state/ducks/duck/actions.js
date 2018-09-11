import types from "./types";

const quack = ( ) => ( {
    type: types.QUACK
} );

const swim = ( distance ) => ( {
    type: types.SWIM,
    payload: {
        distance
    }
} );


const getNames = ( user ) => ( {
    type: types.GET_NAMES,
    payload: {
        request: {
          url: `/users/${user}/repos`
        }
    }
} );

const getRepoDetail = (user, repo) => ({
    type: types.GET_REPO_INFO,
    payload: {
    request: {
        url: `/repos/${user}/${repo}`
    }
    }
})
  
const getUser = (user) => ({
    type: types.GET_USER,
    payload: {
        request: {
            url: `/users/${user}`
        }
    }
})

export default {
    swim,
    quack,
    getNames,
    getRepoDetail,
    getUser
};