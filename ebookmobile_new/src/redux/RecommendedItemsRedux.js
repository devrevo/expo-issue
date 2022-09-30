import { Config, Book } from "@common";
import {
  AsyncStorage
} from "react-native";
import reactotron from "reactotron-react-native";

const types = {
  FETCH_RECOMMENDED_ITEMS_PENDING: "FETCH_RECOMMENDED_ITEMS_PENDING",
  FETCH_RECOMMENDED_ITEMS_SUCCESS: "FETCH_RECOMMENDED_ITEMS_SUCCESS",
  FETCH_RECOMMENDED_ITEMS_FAILURE: "FETCH_RECOMMENDED_ITEMS_FAILURE",
};

export const actions = {
  fetchRecommendedItems: async (dispatch) => {
    dispatch({ type: types.FETCH_RECOMMENDED_ITEMS_PENDING });
    //const json = await WooWorker.getCategories();
    
    const localLang = await AsyncStorage.getItem('LocalLang');
    const username = await AsyncStorage.getItem('username');
    var recomdList = null;
    const response = await fetch(Config.backendAPI +`/getRecommendedForYou.php?username=${username}&idLang=${localLang}&test=1`);
    const result = await response.json();
    recomdList = result;
     if (recomdList === undefined) {
      dispatch(actions.fetchRecommendedItemsFailure("Can't get data from server"));
    } else {
      dispatch(actions.fetchRecommendedItemsSuccess(recomdList));
    }
  },
  fetchRecommendedItemsSuccess: (items) => {
    return { type: types.FETCH_RECOMMENDED_ITEMS_SUCCESS, items };
  },
  fetchRecommendedItemsFailure: (error) => {
    return { type: types.FETCH_RECOMMENDED_ITEMS_FAILURE, error };
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
    case types.FETCH_RECOMMENDED_ITEMS_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case types.FETCH_RECOMMENDED_ITEMS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        list: items || [],
        error: null,
      };
    }
    case types.FETCH_RECOMMENDED_ITEMS_FAILURE: {
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
