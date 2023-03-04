import { createSlice } from "@reduxjs/toolkit";
import { getPokemonList } from "../actionsCreators/pokemonActions";

function isRejectedAction(action) {
	return action.type.endsWith("rejected");
}

const initialState = {
	pokemons: [],
	isLoading: false,
	error: null,
};

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPokemonList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.pokemons = action.payload;
			})
			.addCase(getPokemonList.pending, (state, action) => {
				state.isLoading = true;
			})
			.addMatcher(isRejectedAction, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export default pokemonSlice.reducer;
