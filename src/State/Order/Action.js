import axios from "axios";
import * as types from "./ActionType";

const baseUrl = "http://localhost:8080";

export const payOrder =
  ({ jwt, orderData }) =>
  async (dispatch) => {
    dispatch({ type: types.PAY_ORDER_REQUEST });

    try {
      const response = await axios.post(`${baseUrl}/api/order/pay`, orderData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("-----------Pay Order Success--------", response.data);
      dispatch({ type: types.PAY_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("-----------Pay Order Failure--------", error);
      dispatch({ type: types.PAY_ORDER_FAILURE, payload: error.message });
    }
  };

export const getOrderById =
  ({ jwt, orderId }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_ORDER_REQUEST });

    try {
      const response = await axios.get(`${baseUrl}/api/order/${orderId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("-----------Get Order Success--------", response.data);
      dispatch({ type: types.GET_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("-----------Get Order Failure--------", error);
      dispatch({ type: types.GET_ORDER_FAILURE, payload: error.message });
    }
  };

export const getAllUserOrders =
  ({ jwt, orderType, assetSymbol }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_ALL_ORDERS_REQUEST });

    try {
      const response = await axios.get(`${baseUrl}/api/order/`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        params: {
          order_type: orderType,
          asset_symbol: assetSymbol,
        },
      });
      console.log("-----------Get All Order Success--------", response.data);
      dispatch({ type: types.GET_ALL_ORDERS_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("-----------Get All Order Failure--------", error);
      dispatch({ type: types.GET_ALL_ORDERS_FAILURE, payload: error.message });
    }
  };
