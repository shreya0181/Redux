const Buy_cake = "Buy Cake"
// creating an Action 


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