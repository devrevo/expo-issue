/** @format */

import { createActions, handleActions } from "redux-actions";

const types = {
  UPDATE_SEARCH_FILTER: "UPDATE_SEARCH_FILTER",
  CLEAR_SEARCH_FILTERS: "CLEAR_SEARCH_FILTERS",
};

export const { updateSearchFilter } = createActions(types.UPDATE_SEARCH_FILTER);
export const { clearSearchFilters } = createActions(types.CLEAR_SEARCH_FILTERS);

export const actions = {
  updateSearchFilter,
  clearCategoryFilters: () => ({ type: types.CLEAR_SEARCH_FILTERS }),
};

const initialState = {

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
    case types.UPDATE_SEARCH_FILTER:{
      return {
        state,
        ...action.payload,
      };
    }
    case types.CLEAR_SEARCH_FILTERS:{
      return {
        ...initialState,
        
      }
    }
    default:{
      return state;
    }
  }
}
