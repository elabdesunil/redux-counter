import * as actionTypes from "../actions/actionTypes";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // change data
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETE_RESULT:
      //   const id = 2;
      //   // here, elements if they are object, the objects themselves
      //   // are pointing the same object, but deleting is okay
      //   const newArray = [...state.results];
      //   state.results.splice(id, 1);
      //   return {
      //     ...state,
      //     results: newArray
      //   };
      console.log("Delete Result fired!");
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
  }

  return state;
};

export default reducer;
