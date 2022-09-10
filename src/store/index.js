const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if(action.type ==='decrement'){
    return{
        counter: state.counter -1,
    }
  }

  if(action.type ==='increase'){
    return{
      counter: state.counter + action.amount
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