import { Config  ,Book} from "@common";
import {
  AsyncStorage
} from "react-native";
import reactotron from "reactotron-react-native";
const { AuthorPicks } = Book;
const types = {
    FETCH_AUTHOR_PICKS_PENDING: "FETCH_AUTHOR_PICKS_PENDING",
    FETCH_AUTHOR_PICKS_SUCCESS: "FETCH_AUTHOR_PICKS_SUCCESS",
    FETCH_AUTHOR_PICKS_FAILURE: "FETCH_AUTHOR_PICKS_FAILURE",
  };

  export const actions = {
    fetchAuthorPicks: async (dispatch) => {
      dispatch({ type: types.FETCH_AUTHOR_PICKS_PENDING });
      //const json = await WooWorker.getCategories();
      const localLang = await AsyncStorage.getItem('LocalLang');
      const username = await AsyncStorage.getItem('username');
      var AuthorPick = null;
      const response = await fetch(Config.backendAPI`/getRecommendedForYou.php?username=${username}&idLang=${localLang}&test=1`);
      const result = await response.json();
      AuthorPick = result;

      if (AuthorPick === undefined) {
        dispatch(actions.fetchAuthorPicksFailure("Can't get data from server"));
      } else {
        dispatch(actions.fetchAuthorPicksSuccess(AuthorPick));
      }
    },
    fetchAuthorPicksSuccess: (items) => {
      return { type: types.FETCH_AUTHOR_PICKS_SUCCESS, items };
    },
    fetchAuthorPicksFailure: (error) => {
      return { type: types.FETCH_AUTHOR_PICKS_SUCCESS, error };
    },
  };

  const initialState = {
    isFetching: false,
    error: null,
    list: [],
  };

  export const reducer = (state = initialState, action) => {
    const { type, error, items, AuthorPicks, value } = action;
  
    switch (type) {
      case types.FETCH_AUTHOR_PICKS_PENDING: {
        return {
          ...state,
          isFetching: true,
          error: null,
        };
      }
      case types.FETCH_AUTHOR_PICKS_SUCCESS: {
        return {
          ...state,
          isFetching: false,
          list: items || [],
          error: null,
        };
      }
      case types.FETCH_AUTHOR_PICKS_FAILURE: {
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
  