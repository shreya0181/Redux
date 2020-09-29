const { createStore } = require("redux");

const redux =require('redux');
const Buy_cake = "Buy Cake";
const Buy_IceCream = " Buy  IceCream"
// creating an Action 

// *** Applications state has to be represented by a single object

const initial_state ={numberOfcake: 10,
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

const reducer = (state= initial_state, action)=>{
    switch(action.type){
        case Buy_cake : return {
            //  spread makes a copy of state and  then updates the copy 
            ...state, 
            numberOfcake: state.numberOfcake - 1

        }
        case Buy_IceCream : return {
            //  spread makes a copy of state and  then updates the copy 
            ...state, 
            numberOfIceCreams: state.numberOfIceCreams - 1

        }
         default : return state
    }

}

const store = createStore(reducer);
    console.log("INitialState", store.getState());

// register using subscribe--- *listener
    const unsubscribe = store.subscribe(()=>console.log("updated State", store.getState()));


//Dispatcher is   used  pass actions 
store.dispatch(buycake());
store.dispatch(buyIceCream ());

// remember to unsubscirbe 
unsubscribe();