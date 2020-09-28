const Buy_cake = "Buy Cake"
// creating an Action 

// *** Applications state has to be represented by a single object

const initial_state = 10;
function buycake ()
{
     // An action has a type property 
    return 
    {
        type:  Buy_cake
        info:'firstReduxAction'
    
    }
}
//  Action creator is a function that returns an action 


// (prevState, action )=> newState { } *** reducers work

const reducer = (state= initial_state, action)=>{
    switch(action.type){
        case Buy_cake : return{
            //  spread makes a copy of state and  then updates the copy 
            ...state, 
            numberOfcake: state.numberOfcake -1

        }
         default : return state
    }

}