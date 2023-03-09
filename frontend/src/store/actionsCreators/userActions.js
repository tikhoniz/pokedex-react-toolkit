import axios from "axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

const api = "https://pokedex-react-api-five.vercel.app";

export const checkAuth = createAsyncThunk(
	"user/checkAuth",
	async (_, thunkAPI) => {
		try {
			const user = localStorage.getItem("user");

			if (user) {
				return JSON.parse(user);
			}
			return thunkAPI.signal.aborted;
		} catch (error) {
			localStorage.removeItem("user");
			return thunkAPI.signal.aborted;
		}
	}
);

export const authSocial = createAsyncThunk(
	"user/authSocial",
	async ({ userObject }, thunkAPI) => {
		try {
			const response = await axios.post(
				`${api}/users/authSocial`,
				{
					...userObject,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			const user = response.data;
			localStorage.setItem("user", JSON.stringify(user));

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue({
				message:
					error.message ||
					"На сервере произошла внутренняя непредвиденная ошибка",
			});
		}
	}
);

export const logout = createAction("logout", () => {
	localStorage.removeItem("user");
	return {
		payload: null,
	};
});

export const setFavorite = createAsyncThunk(
	"user/setFavoritePokemon",
	async ({ pokId, userId }, thunkAPI) => {
		try {
			const response = await axios.post(
				`${api}/users/setFavorite`,
				{
					pokId,
					userId,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			localStorage.setItem("user", JSON.stringify(response.data));

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue({
				status: error.response?.status || 500,
				message:
					error.response?.data?.message ||
					"На сервере произошла внутренняя непредвиденная ошибка",
			});
		}
	}
);
