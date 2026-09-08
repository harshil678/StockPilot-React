import {
  ADD_PAYMENT_DETAILS_FAILURE,
  ADD_PAYMENT_DETAILS_REQUEST,
  ADD_PAYMENT_DETAILS_SUCCESS,
  GET_ALL_WITHDRAWAL_FAILURE,
  GET_ALL_WITHDRAWAL_REQUEST,
  GET_ALL_WITHDRAWAL_SUCCESS,
  GET_PAYMENT_DETAILS_FAILURE,
  GET_PAYMENT_DETAILS_REQUEST,
  GET_PAYMENT_DETAILS_SUCCESS,
  GET_WITHDRAWAL_HISTORY_FAILURE,
  GET_WITHDRAWAL_HISTORY_REQUEST,
  GET_WITHDRAWAL_HISTORY_SUCCESS,
  WITHDRAWAL_FAILURE,
  WITHDRAWAL_PROCEED_FAILURE,
  WITHDRAWAL_PROCEED_REQUEEST,
  WITHDRAWAL_PROCEED_SUCCESS,
  WITHDRAWAL_REQUEST,
  WITHDRAWAL_SUCCESS,
} from "./ActionTypes";

const initialState = {
  withdrawal: [],
  history: [],
  loading: false,
  error: null,
  paymentDetails: null,
  requests: [],
};

const withdrawalReducer = (state = initialState, action) => {
  switch (action.type) {
    case WITHDRAWAL_REQUEST:
    case WITHDRAWAL_PROCEED_REQUEEST:
    case GET_WITHDRAWAL_HISTORY_REQUEST:
    case GET_ALL_WITHDRAWAL_REQUEST:
      return { ...state, loading: true };
    case WITHDRAWAL_SUCCESS:
      return { ...state, withdrawal: action.payload, loading: false };
    case ADD_PAYMENT_DETAILS_SUCCESS:
    case GET_PAYMENT_DETAILS_SUCCESS:
      return { ...state, paymentDetails: action.payload, loading: false };
    case WITHDRAWAL_PROCEED_SUCCESS:
      return {
        ...state,
        requests: state.requests.map((item) => {
          item.id == action.payload.id ? action.payload : item;
        }),
        loading: false,
      };
    case GET_WITHDRAWAL_HISTORY_SUCCESS:
      return { ...state, history: action.payload, loading: false };
    case GET_ALL_WITHDRAWAL_SUCCESS:
      return { ...state, requests: action.payload, loading: false };
    case WITHDRAWAL_FAILURE:
    case WITHDRAWAL_PROCEED_FAILURE:
    case GET_WITHDRAWAL_HISTORY_FAILURE:
    case GET_ALL_WITHDRAWAL_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default withdrawalReducer;
