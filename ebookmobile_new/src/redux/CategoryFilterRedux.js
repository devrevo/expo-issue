/** @format */

import { createActions, handleActions } from "redux-actions";

const types = {
  UPDATE_CATEGORY_FILTER: "UPDATE_CATEGORY_FILTER",
  CLEAR_CATEGORY_FILTERS: "CLEAR_CATEGORY_FILTERS",
};

export const { updateCategoryFilter } = createActions(types.UPDATE_CATEGORY_FILTER);
export const { clearCategoryFilters } = createActions(types.CLEAR_CATEGORY_FILTERS);

export const actions = {
  updateCategoryFilter,
  clearCategoryFilters: () => ({ type: types.CLEAR_CATEGORY_FILTERS }),
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
    case types.UPDATE_CATEGORY_FILTER:{
      return {
        state,
        ...action.payload,
      };
    }
    case types.CLEAR_CATEGORY_FILTERS:{
      return {
        ...initialState,
        
      }
    }
    default:{
      return state;
    }
  }
}
