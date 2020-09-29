const redux = require( 'redux');
const createStore = redux.createStore;
const applyMiddlewre = redux.applyMiddleware;
const reduxThunk = require('redux-thunk').default;
const axios = require('axios');
const initalState ={
loading : false,
users : [],
error :''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';


const fetechUsersRequest = ()=>{
  return { 
      type: FETCH_USERS_REQUEST
    
}}

const fetchUsersSuccess = (users)=>{
    return {
        type :  FETCH_USERS_SUCCESS, 
        payload : users 
    }
}

const fetchUsersFailure = (error)=>{
    return{
        type :  FETCH_USERS_FAILURE, 
        payload : error
    }
}

// asyn actionCreator 
const fetchUsers =()=>
{
    return function(dispatch){
        dispatch(fetechUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then (response=>{
          const users = response.data.map(user => user.id);
          dispatch(fetchUsersSuccess(users));
        })
        .catch( error => {
            // error.message is the error message
            dispatch(fetchUsersFailure(error.message))
          })
    }
} 
const reducer = (state = initalState, action)=>{
 switch(action.type)
 { 
     case FETCH_USERS_REQUEST: return{

        ...state, loading: true
     }

     case FETCH_USERS_SUCCESS: return{
         loading:false,
         users:action.payload,
         error :''

     }
     case FETCH_USERS_FAILURE: return {
         loading : false,
         users: [],
         error: action.payload

     }
 }
}
const store = createStore(reducer, applyMiddlewre(reduxThunk));
store.subscribe(()=>{console.log(store.getState()) });
store.dispatch(fetchUsers());