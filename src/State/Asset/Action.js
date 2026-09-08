import axios from "axios";
const baseUrl = "http://localhost:8080";
import * as types from "./ActionTypes";

export const getAssetById =
  ({ assetId, jwt }) =>
    async (dispatch) => {
      dispatch({ type: types.GET_ASSET_REQUEST });
      try {
        const response = await axios.get(`${baseUrl}/api/asset/${assetId}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        console.log("-----------Get Asset Success--------", response.data);
        dispatch({ type: types.GET_ASSET_SUCCESS, payload: response.data });
      } catch (error) {
        console.log("-----------Get Asset Failure--------", error);
        dispatch({ type: types.GET_ASSET_FAILURE, error: error.message });
      }
    };

export const getAssetDetails =
  ({ coinId, jwt }) =>
    async (dispatch) => {
      dispatch({ type: types.GET_ASSET_DETAILS_REQUEST });
      try {
        const response = await axios.get(
          `${baseUrl}/api/asset/coin/${coinId}/user`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        console.log(
          "-----------Get Asset Details Success--------",
          response.data
        );
        dispatch({
          type: types.GET_ASSET_DETAILS_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        console.log("-----------Get Asset Details Failure--------", error);
        dispatch({ type: types.GET_ASSET_DETAILS_FAILURE, error: error.message });
      }
    };

export const getUserAssets =
  ({ jwt }) =>
    async (dispatch) => {
      dispatch({ type: types.GET_USER_ASSETS_REQUEST });
      try {
        const response = await axios.get(`${baseUrl}/api/asset`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        console.log("-----------Get User Assets Success--------", response.data);
        dispatch({ type: types.GET_USER_ASSETS_SUCCESS, payload: response.data });
      } catch (error) {
        console.log("-----------Get User Assets Failure--------", error);
        dispatch({ type: types.GET_USER_ASSETS_FAILURE, error: error.message });
      }
    };
