import { STORE_RESULT, DELETE_RESULT } from "./actionTypes";

export const saveResult = res => {
  //const updatedResult = res * 2;
  return {
    type: STORE_RESULT,
    result: res
  };
};

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

export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    resultElId: id
  };
};
