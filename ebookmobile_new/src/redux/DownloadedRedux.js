import {AsyncStorage } from "react-native";
import reactotron from "reactotron-react-native";

const types = {
    GET_DOWNLOADED_ITEM:"GET_DOWNLOADED_ITEM",
    EMPTY_DOWNLOADED: "EMPTY_DOWNLOADED",
};

export const actions = {
  
fetchDownloadedBooks : async (dispatch) => {
    const response = await AsyncStorage.getItem('DownloadedFinal');

    reactotron.log('RESULTS REDUX DOWNLOADED',response);
    dispatch({
      type: types.GET_DOWNLOADED_ITEM,
      downloadedBooks: JSON.parse(response),
    })
  },
  addHistoryItem: (dispatch, product) => {
    dispatch({
      type: types.ADD_DOWNLOADED_ITEM,
      product,
    });
  },
  
  removeHistoryItem: (dispatch, product) => {
    dispatch({
      type: types.REMOVE_DOWNLOADED_ITEM,
      product,
    });
  },
  emptyHistory: (dispatch) => {
    dispatch({
      type: types.EMPTY_DOWNLOADED,
    });
  },

};


const initialState = {
  downloadedListItems: [],
};

export const reducer = (state = initialState, action) => {
  const { type } = action;
  

  switch (type) {
    case types.GET_DOWNLOADED_ITEM: {
      reactotron.log('reducer', action.wishBooks)
      return Object.assign({}, state, {
        downloadedListItems: action.downloadedBooks,
      });
    }
    case types.EMPTY_DOWNLOADED:
      return Object.assign({}, state, {
        historyListItems: [],
        total: 0,
      });
    default: {
      return state;
    }
  }
};
