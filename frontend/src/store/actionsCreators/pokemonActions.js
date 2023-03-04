import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = process.env.REACT_APP_API_URL;

export const getPokemonList = createAsyncThunk(
	"user/getPokemons",
	async ({ limit, offset }, thunkAPI) => {
		try {
			const response = await axios.get(`${api}/pokemons/${limit}&${offset}`);

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue({
				status: error.response?.status,
				message: error.response?.data?.message,
			});
		}
	}
);
