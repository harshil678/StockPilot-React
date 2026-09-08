import axios from "axios";
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

const baseUrl = "http://localhost:8080";

export const withdrawalRequest =
  ({ amount, jwt }) =>
    async (dispatch) => {
      dispatch({ type: WITHDRAWAL_REQUEST });
      try {
        const response = await axios.post(
          `${baseUrl}/api/withdrawal/${amount}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        console.log(
          "-----------Withdrawal Request Success--------",
          response.data
        );
        dispatch({ type: WITHDRAWAL_SUCCESS, payload: response.data });
      } catch (error) {
        console.log("-----------Withdrawal Request Failure--------", error);
        dispatch({ type: WITHDRAWAL_FAILURE, payload: error.message });
      }
    };

export const proceedWithdrawal =
  ({ id, jwt, accept }) =>
    async (dispatch) => {
      dispatch({ type: WITHDRAWAL_PROCEED_REQUEEST });
      try {
        const response = await axios.patch(
          `${baseUrl}/api/admin/withdrawal/${id}/proceed/${accept}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        console.log("------Withdrawal proceed success----------");
        dispatch({ type: WITHDRAWAL_PROCEED_SUCCESS, payload: response.data });
      } catch (error) {
        console.log("------Withdrawal proceed failure----------");
        dispatch({ type: WITHDRAWAL_PROCEED_FAILURE, payload: error.message });
      }
    };

export const getWithdrawalHistory =
  ({ jwt }) =>
    async (dispatch) => {
      dispatch({ type: GET_WITHDRAWAL_HISTORY_REQUEST });
      try {
        const response = await axios.get(`${baseUrl}/api/withdrawal`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        console.log(
          "------Get Withdrawal History Success----------",
          response.data
        );
        dispatch({
          type: GET_WITHDRAWAL_HISTORY_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        console.log("------Withdrawal proceed failure----------");
        dispatch({
          type: GET_WITHDRAWAL_HISTORY_FAILURE,
          payload: error.message,
        });
      }
    };

export const getAllWithdrawalRequest = ({ jwt }) => async (dispatch) => {
  dispatch({ type: GET_ALL_WITHDRAWAL_REQUEST });
  try {
    const response = await axios.get(`${baseUrl}/api/admin/withdrawal`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("------Get all withdrawals request success----------");
    dispatch({ type: GET_ALL_WITHDRAWAL_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("------Get all withdrawals request failure----------");
    dispatch({ type: GET_ALL_WITHDRAWAL_FAILURE, payload: error.message });
  }
};

export const addPaymentDetails =
  ({ paymentDetails, jwt }) =>
    async (dispatch) => {
      dispatch({ type: ADD_PAYMENT_DETAILS_REQUEST });
      try {
        const response = await axios.post(
          `${baseUrl}/api/payment-details`,
          paymentDetails,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        console.log("------Add PaymentDetails success----------");
        dispatch({ type: ADD_PAYMENT_DETAILS_SUCCESS, payload: response.data });
      } catch (error) {
        console.log("------Add PaymentDetails failure----------");
        dispatch({ type: ADD_PAYMENT_DETAILS_FAILURE, payload: error.message });
      }
    };

export const getPaymentDetails =
  ({ jwt }) =>
    async (dispatch) => {
      dispatch({ type: GET_PAYMENT_DETAILS_REQUEST });
      try {
        const response = await axios.get(`${baseUrl}/api/payment-details`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        console.log("------Get PaymentDetails success----------", response.data);
        dispatch({ type: GET_PAYMENT_DETAILS_SUCCESS, payload: response.data });
      } catch (error) {
        console.log("------Get PaymentDetails failure----------", error);
        dispatch({ type: GET_PAYMENT_DETAILS_FAILURE, payload: error.message });
      }
    };
