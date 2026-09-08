import axios from "axios";
import * as types from "./ActionTypes";

const baseUrl = "http://localhost:8080";

export const getUserWallet = (jwt) => async (dispatch) => {
  dispatch({ type: types.GET_USER_WALLET_REQUEST });

  try {
    const response = await axios.get(`${baseUrl}/api/wallet/`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch({ type: types.GET_USER_WALLET_SUCCESS, payload: response.data });
    console.log("---------Get User Wallet Success------------", response.data);
  } catch (error) {
    console.log("---------Get User Wallet Failure------------");
    dispatch({ type: types.GET_USER_WALLET_FAILURE, payload: error.message });
  }
};

export const getWalletTransactions = (jwt) => async (dispatch) => {
  dispatch({ type: types.GET_WALLET_TRANSACTION_REQUEST });

  try {
    const response = await axios.get(`${baseUrl}/api/transactions`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("---------Get Wallet Transactions Success------------");
    dispatch({
      type: types.GET_WALLET_TRANSACTION_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log("---------Get Wallet Transactions Failed------------" + error);
    dispatch({
      type: types.GET_WALLET_TRANSACTION_FAILURE,
      payload: error.message,
    });
  }
};

export const depositMoney =
  ({ jwt, orderId, paymentId, navigate }) =>
    async (dispatch) => {
      dispatch({ type: types.DEPOSIT_MONEY_REQUEST });
      console.log("------------", orderId, paymentId);

      try {
        const response = await axios.put(`${baseUrl}/api/wallet/deposit`, null, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          params: {
            order_id: orderId,
            paymentId: paymentId,
          },
        });
        console.log("---------Deposit Money Success------------");
        dispatch({ type: types.DEPOSIT_MONEY_SUCCESS, payload: response.data });
        navigate("/wallet");
      } catch (error) {
        console.log("---------Deposit Money Failed------------");
        dispatch({ type: types.DEPOSIT_MONEY_FAILURE, payload: error.message });
      }
    };

export const paymentHandler =
  ({ jwt, amount, paymentMethod }) =>
    async (dispatch) => {
      dispatch({ type: types.DEPOSIT_MONEY_REQUEST });

      try {
        const response = await axios.post(
          `${baseUrl}/api/payment/${paymentMethod}/amount/${amount}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        console.log("---------Deposit Money Success------------");
        window.location.href = response.data.payment_url;
        //   dispatch({ type: types.DEPOSIT_MONEY_SUCCESS, payload: response.data });
      } catch (error) {
        console.log("---------Deposit Money Failed------------", error);
        dispatch({ type: types.DEPOSIT_MONEY_FAILURE, payload: error.message });
      }
    };

export const transferMoney =
  ({ jwt, walletId, reqData }) =>
    async (dispatch) => {
      dispatch({ type: types.TRANSFER_MONEY_REQUEST });

      try {
        const response = await axios.put(
          `${baseUrl}/api/wallet/${walletId}/transfer`,
          reqData,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        console.log(
          "-----------Transfer Money Success-------------",
          response.data
        );
        dispatch({ type: types.TRANSFER_MONEY_SUCCESS, payload: response.data });
      } catch (error) {
        console.log("-----------Transfer Money Failure-------------");
        dispatch({ type: types.TRANSFER_MONEY_FAILURE, payload: error.message });
      }
    };
