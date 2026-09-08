import * as types from "./ActionType";

const initialState = {
  order: null,
  orders: [],
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PAY_ORDER_REQUEST:
    case types.GET_ORDER_REQUEST:
    case types.GET_ALL_ORDERS_REQUEST:
      return { ...state, error: null };

    case types.PAY_ORDER_SUCCESS:
    case types.GET_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
      };
    case types.GET_ALL_ORDERS_SUCCESS:
      return { ...state, orders: action.payload };
    case types.PAY_ORDER_FAILURE:
    case types.GET_ORDER_FAILURE:
    case types.GET_ALL_ORDERS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
