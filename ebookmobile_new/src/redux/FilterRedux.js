/** @format */

import { createActions, handleActions } from "redux-actions";

const types = {
  UPDATE_FILTER: "UPDATE_FILTER",
  CLEAR_FILTERS: "CLEAR_FILTERS",
};

export const { updateFilter } = createActions(types.UPDATE_FILTER);
export const { clearFilters } = createActions(types.CLEAR_FILTERS);

export const actions = {
  updateFilter,
  clearFilters: () => ({ type: types.CLEAR_FILTERS }),
};

const initialState = {
  category: null,
  brand: null,
  tag: null,
  price: 2000,
};

// export const reducer = handleActions(
//   {
//     [updateFilter]: (state, { payload }) => ({
//       ...state,
//       ...payload,
//     }),
//   },
//   defaultState
// );

export const reducer = (state = initialState, action) =>{

  switch(action.type){
    case types.UPDATE_FILTER:{
      return {
        ...state,
        ...action.payload,
      };
    }
    case types.CLEAR_FILTERS:{
      return {
        ...initialState,
        
      }
    }
    default:{
      return state;
    }
  }
}
