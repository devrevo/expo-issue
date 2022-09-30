import reactotron from "reactotron-react-native";
import { Constants, Languages,Config } from "@common";

const types = {
    GET_READLATER_ITEM:"GET_READLATER_ITEM",
    ADD_READLATER_ITEM: "ADD_READLATER_ITEM",
    REMOVE_READLATER_ITEM: "REMOVE_READLATER_ITEM",
    EMPTY_READLATER: "EMPTY_READLATER",
    REQUEST_READLATER_ITEMS: "REQUEST_WISHLIST_ITEMS",
    FETCH_READLATER_ITEM_FAILURE:"FETCH_READLATER_ITEM_FAILURE"
};

export const actions = {
  
fetchReadlaterBooks : async (dispatch, user) => {
    //test = 1 pour charger tout les livres marquer comme readlater par l'utilisateur connecter
    const response = await fetch(Config.backendAPI+`/readlater.php?username=${user}&test=1&select`)
    const json = await response.json();
    
    const tot = json.length
    reactotron.log("redux History",tot)

    if (json === undefined) {
      dispatch({
        type: types.FETCH_READLATER_ITEM_FAILURE,
        message: Languages.ErrorMessageRequest,
      });
    } else if (json.code) {
      dispatch({
        type: types.FETCH_READLATER_ITEM_FAILURE,
        message: json.message,
      });
    } else {
      dispatch({
        type: types.GET_READLATER_ITEM,
        readLater: json,
      });
    }
    
  },
  addReadlaterBooks: (dispatch, product) => {
    dispatch({
      type: types.ADD_READLATER_ITEM,
      product,
    });
  },
  
  removeReadlaterBooks: (dispatch, product) => {
    dispatch({
      type: types.REMOVE_READLATER_ITEM,
      product,
    });
  },
  emptyReadlater: (dispatch) => {
    dispatch({
      type: types.EMPTY_READLATER,
    });
  },

};


const initialState = {
  readLateritems: [],
  total: 0,
  totalPrice: 0,
  isFetching: false,
  error:''
};

export const reducer = (state = initialState, action) => {
  const { type } = action;
  

  switch (type) {
    case types.GET_READLATER_ITEM: {
      reactotron.log('reducer', action.wishBooks)
      return Object.assign({}, state, {
        readLateritems: action.readLater,
        total:action.tot
      });
    }
    case types.FETCH_WISHLIST_ITEM_FAILURE: {
      return {
          ...state,
          isFetching: false,
          error,
        }
      }
    case types.REQUEST_WISHLIST_ITEMS: {
      reactotron.log('REEEEEEEEEEEEEEEEEEEEEEEEQUEST WISHLIST')
      return Object.assign({}, state, {
        isFetching: true,
      });
    }
    case types.ADD_READLATER_ITEM: {
      const isExisted = state.readLateritems.some((readLateritems) =>
      compareReadLaterListItem(readLateritems, action)
      );
      return isExisted
        ? state
        : Object.assign({}, state, {
            readLateritems: [
              ...state.readLateritems,
              readLaterItem(undefined, action),
            ],
            total: state.total + 1,
          });
    }
    case types.REMOVE_READLATER_ITEM: {
      const index1 = state.readLateritems.findIndex((readLateritem) =>
      compareReadLaterListItem(readLateritem, action)
      ); // check if existed
      return index1 == -1
        ? state // This should not happen, but catch anyway
        : Object.assign({}, state, {
            readLateritems: state.readLateritems.filter(
              (readLateritem) => !compareReadLaterListItem(readLateritem, action)
            ),
            total: state.total - 1,
          });
    }
    case types.EMPTY_READLATER:
      return Object.assign({}, state, {
        readLateritems: [],
        total: 0,
      });
    default: {
      return state;
    }
  }
};

const compareReadLaterListItem = (readLateritem, action) => {
  return readLateritem.product.id === action.product.id;
};

const readLaterItem = (
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
    case types.ADD_READLATER_ITEM:
      return Object.assign({}, state, { product: action.product });
    default:
      return state;
  }
};