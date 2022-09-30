import reactotron from "reactotron-react-native";
import { Constants, Languages,Config } from "@common";

const types = {
  GET_WISHLIST_ITEM:"GET_WISHLIST_ITEM",
  ADD_WISHLIST_ITEM: "ADD_WISHLIST_ITEM",
  REMOVE_WISHLIST_ITEM: "REMOVE_WISHLIST_ITEM",
  EMPTY_WISHLIST: "EMPTY_WISHLIST",
  REQUEST_WISHLIST_ITEMS: "REQUEST_WISHLIST_ITEMS",
  FETCH_WISHLIST_ITEM_FAILURE: "FETCH_WISHLIST_ITEM_FAILURE",

};

export const actions = {
  fetchWishListItem:async (dispatch, user) => {

    const response = await fetch(Config.backendAPI+`/likedapi.php?username=${user}&select`)
    const json = await response.json();

  const tot = json.length
    reactotron.log("redux wishlist",tot)

    if (json === undefined) {
      dispatch({
        type: types.FETCH_WISHLIST_ITEM_FAILURE,
        message: Languages.ErrorMessageRequest,
      });
    } else if (json.code) {
      dispatch({
        type: types.FETCH_WISHLIST_ITEM_FAILURE,
        message: json.message,
      });
    } else {
      dispatch({
        type: types.GET_WISHLIST_ITEM,
        wishBooks: json,
      });
    }
  },
  
  addWishListItem: (dispatch, product) => {
    dispatch({
      type: types.ADD_WISHLIST_ITEM,
      product,
    });
  },

  removeWishListItem: (dispatch, product) => {
    dispatch({
      type: types.REMOVE_WISHLIST_ITEM,
      product,
    });
  },
  emptyWishList: (dispatch) => {
    dispatch({
      type: types.EMPTY_WISHLIST,
    });
  },
};

const initialState = {
  wishListItems: [],
  total: 0,
  totalPrice: 0,
  isFetching: false,
  error:''
};

export const reducer = (state = initialState, action) => {
  const { type } = action;
  

  switch (type) {
    case types.GET_WISHLIST_ITEM: {
      reactotron.log('reducer', action.wishBooks)
      return Object.assign({}, state, {
        wishListItems: action.wishBooks,
        total:action.tot,
        isFetching: false
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
    case types.ADD_WISHLIST_ITEM: {
      const isExisted = state.wishListItems.some((wishListItem) =>
        compareWishListItem(wishListItem, action)
      );
      return isExisted
        ? state
        : Object.assign({}, state, {
            wishListItems: [
              ...state.wishListItems,
              wishListItem(undefined, action),
            ],
            total: state.total + 1,
          });
    }
    case types.REMOVE_WISHLIST_ITEM: {
      const index1 = state.wishListItems.findIndex((wishListItem) =>
        compareWishListItem(wishListItem, action)
      ); // check if existed
      return index1 == -1
        ? state // This should not happen, but catch anyway
        : Object.assign({}, state, {
            wishListItems: state.wishListItems.filter(
              (wishListItem) => !compareWishListItem(wishListItem, action)
            ),
            total: state.total - 1,
          });
    }
    case types.EMPTY_WISHLIST:
      return Object.assign({}, state, {
        wishListItems: [],
        total: 0,
      });
    default: {
      return state;
    }
  }
};

const compareWishListItem = (wishListItem, action) => {
  return wishListItem.id === action.product.id;
};

const wishListItem = (
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
    case types.ADD_WISHLIST_ITEM:
      return Object.assign({}, state, { product: action.product });
    default:
      return state;
  }
};