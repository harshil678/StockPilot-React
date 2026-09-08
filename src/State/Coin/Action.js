import axios from "axios";
import {
  FETCH_COIN_BY_ID_FAILURE,
  FETCH_COIN_BY_ID_REQUEST,
  FETCH_COIN_BY_ID_SUCCESS,
  FETCH_COIN_DETAILS_FAILURE,
  FETCH_COIN_DETAILS_REQUEST,
  FETCH_COIN_DETAILS_SUCCESS,
  FETCH_COIN_LIST_FAILURE,
  FETCH_COIN_LIST_REQUEST,
  FETCH_COIN_LIST_SUCCESS,
  FETCH_MARKET_CHART_FAILURE,
  FETCH_MARKET_CHART_REQUEST,
  FETCH_MARKET_CHART_SUCCESS,
  FETCH_TOP_50_COINS_FAILURE,
  FETCH_TOP_50_COINS_REQUEST,
  FETCH_TOP_50_COINS_SUCCESS,
  SEARCH_COIN_FAILURE,
  SEARCH_COIN_REQUEST,
  SEARCH_COIN_SUCCESS,
} from "./ActionType";

const baseUrl = "http://localhost:8080";

export const getCoinList = (page) => async (dispatch) => {
  dispatch({ type: FETCH_COIN_LIST_REQUEST });

  try {
    const { data } = await axios.get(`${baseUrl}/coins/?page=${page}`);
    console.log("Coin List Fetched-----------", data);
    dispatch({ type: FETCH_COIN_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error, "-------------Can not find user.");
    dispatch({ type: FETCH_COIN_LIST_FAILURE, payload: error.message });
  }
};

export const getTop50 = () => async (dispatch) => {
  dispatch({ type: FETCH_TOP_50_COINS_REQUEST });
  try {
    const response = await axios.get(`${baseUrl}/coins/top50`);
    dispatch({ type: FETCH_TOP_50_COINS_SUCCESS, payload: response.data });
    console.log("Top 50-----------", response.data);
  } catch (error) {
    console.log("Error fetching top 50");
    dispatch({ type: FETCH_TOP_50_COINS_FAILURE, payload: error.message });
  }
};

export const fetchMarketChart =
  ({ coinId, days }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_MARKET_CHART_REQUEST });
    try {
      const response = await axios.get(
        `${baseUrl}/coins/${coinId}/chart?days=${days}`
      );
      dispatch({ type: FETCH_MARKET_CHART_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("Error fetching chart-------------");
      dispatch({ type: FETCH_MARKET_CHART_FAILURE, payload: error.message });
    }
  };

export const fetchCoinById = (coinId) => async (dispatch) => {
  dispatch({ type: FETCH_COIN_BY_ID_REQUEST });
  try {
    const response = await axios.get(`${baseUrl}/coins/${coinId}`);
    dispatch({ type: FETCH_COIN_BY_ID_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("Error fetching coin by id--------");
    dispatch({ type: FETCH_COIN_BY_ID_FAILURE, payload: error.message });
  }
};

export const fetchCoinDetails =
  ({ coinId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_COIN_DETAILS_REQUEST });
    try {
      const response = await axios.get(`${baseUrl}/coins/details/${coinId}`);
      dispatch({ type: FETCH_COIN_DETAILS_SUCCESS, payload: response.data });
      console.log("Coin Details----------", response.data);
    } catch (error) {
      console.log("Error fetching coin details--------------");
      dispatch({ type: FETCH_COIN_DETAILS_FAILURE, payload: error.message });
    }
  };

export const searchCoin = (keyword) => async (dispatch) => {
  dispatch({ type: SEARCH_COIN_REQUEST });
  try {
    const response = await axios.get(`${baseUrl}/coins/search?q=${keyword}`);
    dispatch({ type: SEARCH_COIN_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("Error searching coin--------------");
    dispatch({ type: SEARCH_COIN_FAILURE, payload: error.message });
  }
};
