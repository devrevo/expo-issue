/**
 * Created by InspireUI on 14/02/2017.
 *
 * @format
 */

 import { Config } from "@common";
 // import { warn } from '@app/Omni'
 import { WooWorker } from "api-ecommerce";
 import reactotron from "reactotron-react-native";
 import  { AsyncStorage } from "react-native";
 
 const types = {
   FETCH_CATEGORIES_PENDING: "FETCH_CATEGORIES_PENDING",
   FETCH_CATEGORIES_SUCCESS: "FETCH_CATEGORIES_SUCCESS",
   FETCH_CATEGORIES_FAILURE: "FETCH_CATEGORIES_FAILURE",
 
   SWITCH_DISPLAY_MODE: "SWITCH_DISPLAY_MODE",
   SET_SELECTED_CATEGORY: "SET_SELECTED_CATEGORY",
   CATEGORY_SELECT_LAYOUT: "CATEGORY_SELECT_LAYOUT",
   CLEAR_FOLLOWED_CHAINES:"CLEAR_FOLLOWED_CHAINES"
 };
 
 export const DisplayMode = {
   ListMode: "ListMode",
   GridMode: "GridMode",
   CardMode: "CardMode",
 };
 
 export const actions = {
   fetchFollowedCategories: async (dispatch, user) => {
     dispatch({ type: types.FETCH_CATEGORIES_PENDING });
    //  const json = await WooWorker.getCategories();
     console.log("---è-è-è-è-è-è-è-è-è-è",user);
     const response = await fetch(Config.backendAPI+`/follow_chaine_api.php?username=${user}&select`);
     const tt = await response.json();

    
     
    
     if (tt === undefined) {
       dispatch(actions.fetchCategoriesFailure("Can't get data from server"));
     } else if (tt.code) {
       dispatch(actions.fetchCategoriesFailure(tt.message));
     } else {
       dispatch(actions.fetchCategoriesSuccess(tt));
     }
   },
   fetchCategoriesSuccess: (items) => {
     return { type: types.FETCH_CATEGORIES_SUCCESS, items };
   },
   fetchCategoriesFailure: (error) => {
     return { type: types.FETCH_CATEGORIES_FAILURE, error };
   },
   switchDisplayMode: (mode) => {
     return { type: types.SWITCH_DISPLAY_MODE, mode };
   },
   setSelectedCategory: (category) => {
     return { type: types.SET_SELECTED_CATEGORY, category };
   },
   setActiveLayout: (value) => {
     return { type: types.CATEGORY_SELECT_LAYOUT, value };
   },
   emptyFollowedCategories: (dispatch) => {
    dispatch({
      type: types.CLEAR_FOLLOWED_CHAINES,
    });
  },
 };
 
 const initialState = {
   isFetching: false,
   error: null,
   displayMode: DisplayMode.GridMode,
   list: [],
   selectedCategory: null,
   selectedLayout: Config.CategoryListView,
 };
 
 export const reducer = (state = initialState, action) => {
   const { type, mode, error, items, category, value } = action;
 
   switch (type) {
     case types.FETCH_CATEGORIES_PENDING: {
       return {
         ...state,
         isFetching: true,
         error: null,
       };
     }
     case types.FETCH_CATEGORIES_SUCCESS: {
       return {
         ...state,
         isFetching: false,
         list: items || [],
         error: null,
       };
     }
     case types.FETCH_CATEGORIES_FAILURE: {
       return {
         ...state,
         isFetching: false,
         list: [],
         error,
       };
     }
     case types.SWITCH_DISPLAY_MODE: {
       return {
         ...state,
         displayMode: mode,
       };
     }
     case types.SET_SELECTED_CATEGORY: {
       return {
         ...state,
         selectedCategory: category,
       };
     }

     case types.CLEAR_FOLLOWED_CHAINES:{
      return{
        ...state,
        isFetching: false,
        list: [],
        error: null,
      }
    }

     case types.CATEGORY_SELECT_LAYOUT:
       return {
         ...state,
         isFetching: false,
         selectedLayout: value || false,
       };
 
     default: {
       return state;
     }
   }
 };
 