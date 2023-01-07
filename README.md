# Redux-Counter

## Introduction:

This is just a practice exercise for react-redux.


### Old `Redux` to `reduxjs/toolkit`
Since this repository was created, there has been updates in the way global states are managed. `Redux` will be replaced by `reduxjs/toolkit`

[Here](https://github.com/elabdesunil/counter-using-Reduxjs-toolkit) is the updated version of this same application:

## Code Snippets:
### Importing `connect` - a function which connects react to the redux store
```javascript
import { connect } from "react-redux";
```
### Getting actions:
```javascript
import {
  increment,
  decrement,
  add,
  subtract,
  storeResult,
  deleteResult
} from "../../store/actions/";
```

### `storeResult()` function or action looks like:
```javascript
export const storeResult = res => {
  return function(dispatch, getState) {
    // we get this dispatch from redux-thunk middleware
    setTimeout(() => {
      //   const oldCounter = getState().counter;
    //   const oldCounter = getState().ctr.counter;
    //   console.log("[storeResult] oldCounter", oldCounter);
      dispatch(saveResult(res));
    }, 2000);
  };
};
```

### `deleteResult()` action:
```javascript
export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    resultElId: id
  };
};
```

### `utility.js` `updateObject()` function used to handle a repetitve task of returning a newObject adding new updated values
```javascript 
export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  };
};
```

### `counter.js` reducer
```javascript
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      //   return {
      //     ...state,
      //     counter: state.counter + 1
      //   };
      return updateObject(state, { counter: state.counter + 1 });

    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });

    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.value });

    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.value });
  }

  return state;
};
```

### `counter.js` reducer:
```javascript
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // change data
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result })
      });
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
  }

  return state;
};
```
### function for mapping states to props
```javascript
const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};
```
### function for mapping dispatch to props
```javascript
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(10)),
    onSubtractCounter: () => dispatch(subtract(8)),
    onStoreResult: result => dispatch(storeResult(result)),
    onDeleteResult: id => dispatch(deleteResult(id))
  };
};
```
### using `connect` function to pass the functions `mapStateToProps` and `mapDispatchToProps`, which makes the functions and/or variables available in `this.props`
```javascript
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
```
