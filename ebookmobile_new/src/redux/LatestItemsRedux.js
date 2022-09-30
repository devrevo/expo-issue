import { Config, Book } from "@common";
import {
  AsyncStorage
} from "react-native";
import reactotron from "reactotron-react-native";
const types = {
    FETCH_LATEST_ITEMS_PENDING: "FETCH_LATEST_ITEMS_PENDING",
    FETCH_LATEST_ITEMS_SUCCESS: "FETCH_LATEST_ITEMS_SUCCESS",
    FETCH_LATEST_ITEMS_FAILURE: "FETCH_LATEST_ITEMS_FAILURE",
  };

  export const actions = {
    fetchLatestItems: async (dispatch) => {
      dispatch({ type: types.FETCH_LATEST_ITEMS_PENDING });
      //const json = await WooWorker.getCategories();
      const localLang = await AsyncStorage.getItem('LocalLang');
      const username = await AsyncStorage.getItem('username');
      var LatestSummaries = null;
      const response = await fetch(Config.backendAPI+`/getRecommendedForYou.php?username=${username}&idLang=${localLang}&test=4`);
      const result = await response.json();
      LatestSummaries = result;

    if (LatestSummaries === undefined) {
      dispatch(actions.fetchLatestItemsFailure("Can't get data from server"));
    } else {
      dispatch(actions.fetchLatestItemsSuccess(LatestSummaries));
    }
    },
    fetchLatestItemsSuccess: (items) => {
      return { type: types.FETCH_LATEST_ITEMS_SUCCESS, items };
    },
    fetchLatestItemsFailure: (error) => {
      return { type: types.FETCH_LATEST_ITEMS_FAILURE, error };
    },
  };

  const initialState = {
    isFetching: false,
    error: null,
    list: [],
  };

  export const reducer = (state = initialState, action) => {
    const { type, error, items, LatestItems, value } = action;
  
    switch (type) {
      case types.FETCH_LATEST_ITEMS_PENDING: {
        return {
          ...state,
          isFetching: true,
          error: null,
        };
      }
      case types.FETCH_LATEST_ITEMS_SUCCESS: {
        return {
          ...state,
          isFetching: false,
          list: items || [],
          error: null,
        };
      }
      case types.FETCH_LATEST_ITEMS_FAILURE: {
        return {
          ...state,
          isFetching: false,
          list: [],
          error,
        };
      }

      default: {
        return state;
      }
    }
  };
  