import reactotron from "reactotron-react-native";
import { Constants, Languages,Config } from "@common";

const types = {
    GET_RECIEVED_ITEM:"GET_RECIEVED_ITEM",
    EMPTY_RECIEVED: "EMPTY_RECIEVED",
    FETCH_RECIEVED_ITEM_FAILURE: "FETCH_RECIEVED_ITEM_FAILURE",
    REQUEST_RECIEVED_ITEMS: "REQUEST_RECIEVED_ITEMS",
    REMOVE_RECIEVED_ITEM: "REMOVE_RECIEVED_ITEM"
};

export const actions = {
  
fetchRecievedBooks : async (dispatch, user) => {

    const response = await fetch(Config.backendAPI+`/sendtoapi.php?select&username=${user}&select`)
    const json = await response.json();
    const tot = json.length

      reactotron.log("json recieved =====>",json);


      if (json === undefined) {
        dispatch({
          type: types.FETCH_RECIEVED_ITEM_FAILURE,
          message: Languages.ErrorMessageRequest,
        });
      } else if (json.code) {
        dispatch({
          type: types.FETCH_RECIEVED_ITEM_FAILURE,
          message: json.message,
        });
      } else {
        dispatch({
          type: types.GET_RECIEVED_ITEM,
          recievedBooks: json,
        });
      }
      
    },

  
  removeRecievedBooks: (dispatch, product) => {
    dispatch({
      type: types.REMOVE_RECIEVED_ITEM,
      product,
    });
  },
  emptyRecievedBooks: (dispatch) => {
    dispatch({
      type: types.EMPTY_RECIEVED,
    });
  },

};


const initialState = {
  recievedBooks: [],
  total: 0,
  totalPrice: 0,
  isFetching: false,
  error:''
};

export const reducer = (state = initialState, action) => {
  const { type } = action;
  

  switch (type) {
    case types.GET_RECIEVED_ITEM: {
      return Object.assign({}, state, {
        recievedBooks: action.recievedBooks,
        total:action.tot,
        isFetching:false
      });
    }
    case types.FETCH_RECIEVED_ITEM_FAILURE: {
      return {
          ...state,
          isFetching: false,
          error,
        }
      }
    case types.REQUEST_RECIEVED_ITEMS: {
      reactotron.log('REEEEEEEEEEEEEEEEEEEEEEEEQUEST WISHLIST')
      return Object.assign({}, state, {
        isFetching: true,
      });
    }

    case types.EMPTY_RECIEVED:
      return Object.assign({}, state, {
        recievedBooks: [],
        total: 0,
      });


    default: {
      return state;
    }
  }
};
