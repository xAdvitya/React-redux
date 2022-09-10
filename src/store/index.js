const redux = require('redux');
const initialState = { counter: 0 ,showCounter:true}

const counterReducer = (state=initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter:state.showCounter,
    };
  }

  if(action.type ==='decrement'){
    return{
        counter: state.counter -1,
        showCounter:state.showCounter
    }
  }

  if(action.type ==='increase'){
    return{
      counter: state.counter + action.amount,
      showCounter:state.showCounter
    }
  }

  if(action.type==='toggle'){
    return{
      showCounter: !state.showCounter
    }
  }
  return state
};
const store = redux.createStore(counterReducer);
// console.log(store.getState())

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);


export default store;