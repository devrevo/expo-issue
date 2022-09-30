import reactotron from "reactotron-react-native";
import { Constants, Languages,Config } from "@common";

const types = {
    GET_HISTORY_ITEM:"GET_HISTORY_ITEM",
    ADD_HISTORY_ITEM: "ADD_HISTORY_ITEM",
    REMOVE_HISTORY_ITEM: "REMOVE_HISTORY_ITEM",
    FETCH_HISTORY_ITEM_FAILURE: "FETCH_HISTORY_ITEM_FAILURE",
    REQUEST_HISTORY_ITEM: "REQUEST_HISTORY_ITEM",
    EMPTY_HISTORY: "EMPTY_HISTORY",
};

export const actions = {
  
fetchHistoryOfBooks : async (dispatch, user) => {

    const response = await fetch(Config.backendAPI+`/historyapi.php?username=${user}&select`)
    const json = await response.json();
    
    const tot = json.length
    reactotron.log("redux History",tot)

    if (json === undefined) {
      dispatch({
        type: types.FETCH_HISTORY_ITEM_FAILURE,
        message: Languages.ErrorMessageRequest,
      });
    } else if (json.code) {
      dispatch({
        type: types.FETCH_HISTORY_ITEM_FAILURE,
        message: json.message,
      });
    } else {
      dispatch({
        type: types.GET_HISTORY_ITEM,
        historyBooks: json,
      });
    }
  },

  addHistoryItem: (dispatch, product) => {
    dispatch({
      type: types.ADD_HISTORY_ITEM,
      product,
    });
  },
  
  removeHistoryItem: (dispatch, product) => {
    dispatch({
      type: types.REMOVE_HISTORY_ITEM,
      product,
    });
  },
  emptyHistory: (dispatch) => {
    dispatch({
      type: types.EMPTY_HISTORY,
    });
  },

};


const initialState = {
  historyListItems: [],
  total: 0,
  totalPrice: 0,
  isFetching: false,
  error:''
};

export const reducer = (state = initialState, action) => {
  const { type } = action;
  

  switch (type) {
    case types.GET_HISTORY_ITEM: {
      return Object.assign({}, state, {
        historyListItems: action.historyBooks,
        total:action.tot,
        isFetching:false
      });
    }
    case types.FETCH_HISTORY_ITEM_FAILURE: {
    return {
        ...state,
        isFetching: false,
        error,
      }
    }

    case types.REQUEST_HISTORY_ITEM: {
      reactotron.log('REEEEEEEEEEEEEEEEEEEEEEEEQUEST')
      return Object.assign({}, state, {
        isFetching: true,
      });
    }
    case types.ADD_HISTORY_ITEM: {
      const isExisted = state.historyListItems.some((historyListItems) =>
      compareHistoryListItem(historyListItems, action)
      );
      return isExisted
        ? state
        : Object.assign({}, state, {
            historyListItems: [
              ...state.historyListItems,
              historyListItem(undefined, action),
            ],
            total: state.total + 1,
          });
    }
    case types.REMOVE_HISTORY_ITEM: {
      const index1 = state.historyListItems.findIndex((historyListItem) =>
      compareHistoryListItem(historyListItem, action)
      ); // check if existed
      return index1 == -1
        ? state // This should not happen, but catch anyway
        : Object.assign({}, state, {
            historyListItems: state.historyListItems.filter(
              (historyListItem) => !compareHistoryListItem(historyListItem, action)
            ),
            total: state.total - 1,
          });
    }
    case types.EMPTY_HISTORY:
      return Object.assign({}, state, {
        historyListItems: [],
        total: 0,
      });
    default: {
      return state;
    }
  }
};

const compareHistoryListItem = (historyListItem, action) => {
  return historyListItem.product.id === action.product.id;
};

const historyListItem = (
  state = { product: undefined, variation: undefined },
  action
) => {
  reactotron.log("function", action)
  switch (action.type) {
    // case types.GET_WISHLIST_ITEM:
    //   return Object.assign({}, state, {
    //     wishListItems: [
    //       ...state.wishListItems,
    //       action.wishBooks,
    //     ],
    //     total:action.tot
    //   });
    case types.ADD_HISTORY_ITEM:
      return Object.assign({}, state, { product: action.product });
    default:
      return state;
  }
};