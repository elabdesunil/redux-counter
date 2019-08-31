import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.resultElId
  );
  return updateObject(state, { results: updatedArray });
};

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

export default reducer;

/// *********************************////

// case actionTypes.DELETE_RESULT:
//   const id = 2;
//   // here, elements if they are object, the objects themselves
//   // are pointing the same object, but deleting is okay
//   const newArray = [...state.results];
//   state.results.splice(id, 1);
//   return {
//     ...state,
//     results: newArray
//   };
