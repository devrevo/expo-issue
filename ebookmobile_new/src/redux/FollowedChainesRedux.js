import { Config } from "@common";
import reactotron from "reactotron-react-native";

const types = {
    FETCH_FOLLOWED_CHAINES_PENDING: "FETCH_FOLLOWED_CHAINES_PENDING",
    FETCH_FOLLOWED_CHAINES_SUCCESS: "FETCH_FOLLOWED_CHAINES_SUCCESS",
    FETCH_FOLLOWED_CHAINES_FAILURE: "FETCH_FOLLOWED_CHAINES_FAILURE",
    CLEAR_FOLLOWED_CHAINES:"CLEAR_FOLLOWED_CHAINES",
    REQUEST_FOLLOWED_CHAINES: "REQUEST_FOLLOWED_CHAINES"
  };

  export const actions = {
    fetchFollowedChaines: async (dispatch, user) => {
      dispatch({ type: types.REQUEST_FOLLOWED_CHAINES}); 
      
      //const json = await WooWorker.getCategories();
      const response = await fetch(Config.backendAPI+`/follow_chaine_api.php?username=${user}&select`);
      const tt = await response.json();
     
      if (tt === undefined) {
        dispatch(actions.fetchFollowedChainesFailure("Can't get data from server"));
      } else if (tt.code) {
        dispatch(actions.fetchFollowedChainesFailure(tt.message));
      } else {
        dispatch(actions.fetchFollowedChainesSuccess(tt));
      }
    },
    fetchFollowedChainesSuccess: (items) => {
      return { type: types.FETCH_FOLLOWED_CHAINES_SUCCESS, items };
    },
    fetchFollowedChainesFailure: (error) => {
      return { type: types.FETCH_FOLLOWED_CHAINES_FAILURE, error };
    },
    emptyFollowedChaines: (dispatch) => {
      dispatch({
        type: types.CLEAR_FOLLOWED_CHAINES,
      });
    },
  };

  const initialState = {
    isFetching: false,
    error: null,
    list: [],

  };

  export const reducer = (state = initialState, action) => {
    const { type, error, items, RecommendedItems, value } = action;
  
    switch (type) {
      case types.FETCH_FOLLOWED_CHAINES_PENDING: {
        return {
          ...state,
          isFetching: true,
          error: null,
        };
      }
      case types.FETCH_FOLLOWED_CHAINES_SUCCESS: {
        return {
          ...state,
          isFetching: false,
          list: items || [],
          error: null,
        };
      }

      case types.REQUEST_FOLLOWED_CHAINES: {
        reactotron.log('REEEEEEEEEEEEEEEEEEEEEEEEQUEST FOLLOWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEED')
        return Object.assign({}, state, {
          isFetching: true,
        });
      }
      case types.FETCH_FOLLOWED_CHAINES_FAILURE: {
        return {
          ...state,
          isFetching: false,
          list: [],
          error,
        };
      }

      case types.CLEAR_FOLLOWED_CHAINES:{
        reactotron.log("CLEARING FOLLOWED CHAINS");
        return{
          ...state,
          isFetching: false,
          list: [],
          error: null,
        }
      }

      default: {
        return state;
      }
    }
  };
  