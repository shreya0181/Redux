const redux =require('redux');
const createStore = redux.createStore;
const reduxLogger = require('redux-logger')
const combineReducers = redux.combineReducers;

// reduxLogger middleware

const logger = reduxLogger.createLogger();

// applymiddleware
const applyMiddleware = redux.applyMiddleware;


const Buy_cake = "Buy Cake";
const Buy_IceCream = " Buy  IceCream"
// creating an Action 

// *** Applications state has to be represented by a single object

const initial_Cakestate ={numberOfcake: 10,
} ;
const initial_IceCreamstate ={
    numberOfIceCreams: 20} ;
function buycake ()
{
     // An action has a type property 
    return (
    {
        type:  Buy_cake,
        info:'firstReduxAction'
    
    })
}
//  Action creator is a function that returns an action 

function buyIceCream ()
{
     // An action has a type property 
    return (
    {
        type:  Buy_IceCream,
        info:'secondReduxAction'
    
    })
}


// (prevState, action )=> newState { } *** reducers work

const cakeReducer = (state= initial_Cakestate, action)=>{
    switch(action.type){
        case Buy_cake : return {
            //  spread makes a copy of state and  then updates the copy 
            ...state, 
            numberOfcake: state.numberOfcake - 1

        }
        
         default : return state
    }

}
const IceCreamReducer = (state= initial_IceCreamstate, action)=>{
    switch(action.type){
       
        case Buy_IceCream : return {
            //  spread makes a copy of state and  then updates the copy 
            ...state, 
            numberOfIceCreams: state.numberOfIceCreams - 1

        }
         default : return state
    }

}
//  combinig different reducers 

const rootReducer = combineReducers({
    cake : cakeReducer,
    IceCream : IceCreamReducer
});


const store = createStore(rootReducer, applyMiddleware(logger));


    // console.log("INitialState", store.getState());
    console.log('Initial State ', store.getState())
// register using subscribe--- *listener
const unsubscribe = store.subscribe(() => { })


//Dispatcher is   used  pass actions 
store.dispatch(buycake());
store.dispatch(buyIceCream ());

// remember to unsubscirbe 
unsubscribe();