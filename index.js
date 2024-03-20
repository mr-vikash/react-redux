const BUY_CAKE = 'BUY_CAKE'

const BUY_ICECREAM = "BUY_ICECREAM";

const redux = require('redux')

const combineReducers = redux.combineReducers

const createStore = redux.createStore

function buyCake()
{
    return {
      type: BUY_CAKE,
      info: 'first redux action'
    };
}


function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "second redux action",
  };
}
// (previousState,action)=>newState

// const initialState = {
//     numberOfCakes: 10,
//     numberOfIceCream:20
// }

const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCream: 10,
};

// const reducer = (state = initialState, action)=>
// {
//     switch (action.type) {
//       case BUY_CAKE:
//         return {
//           ...state,
//           numberOfCakes: state.numberOfCakes - 1,
//         };
//       case BUY_ICECREAM:
//         return {
//           ...state,
//           numberOfIceCream: state.numberOfIceCream - 1,
//         };
//       default:
//         return state;
//     }
// }

const cakeReducer = (state=initialCakeState,action)=>{
    switch(action.type)
    {
        case BUY_CAKE: return {
          numberOfCakes: state.numberOfCakes - 1,
        };
        default:
         return state;
    }
}


const iceCreamReducer = (state=initialIceCreamState,action)=>{
    switch (action.type) {
      case BUY_ICECREAM:
        return {
          numberOfIceCream: state.numberOfIceCream - 1,
        };
      default:
        return state;
    }
}
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})
//store

const store = createStore(rootReducer);

console.log("Initial State", store.getState())

console.log("-----------------------------")
const unsubscribe = store.subscribe(()=> console.log("Updated State", store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());

unsubscribe()