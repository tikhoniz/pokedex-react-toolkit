import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api = process.env.REACT_APP_VERCEL_URL;
console.log('process.env.REACT_APP_VERCEL_URL', process.env.REACT_APP_VERCEL_URL);
export const getPokemonList = createAsyncThunk(
	"user/getPokemons",
	async ({ limit, offset }, thunkAPI) => {
		try {
			const response = await axios.get(`${api}/pokemons/${limit}&${offset}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue({
				message: error.message,
			});
		}
	}
);
