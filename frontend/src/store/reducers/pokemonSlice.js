import { createSlice } from "@reduxjs/toolkit";
import { getPokemonList } from "../actionsCreators/pokemonActions";

function isRejectedAction(action) {
	return action.type.endsWith("rejected");
}

const initialState = {
	pokemon: null,
	pokemons: [],
	countPokemons: 0,
	itemPerPage: 10,
	isLoading: false,
	nameFilter: "",
	tags: [],
	error: null,
};

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		setPokemon(state, data) {
			state.pokemon = data.payload;
		},
		changeItemPerPage(state, data) {
			state.itemPerPage = parseInt(data.payload, 10);
		},
		filterItemByName(state, data) {
			state.nameFilter = data.payload;
		},
		toggleTag(state, data) {
			state.tags = state.tags.includes(data.payload)
				? state.tags.filter((el) => el !== data.payload)
				: [...state.tags, data.payload];
		},
		clearTags(state) {
			state.tags = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPokemonList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.pokemons = action.payload.pokemonList;
				state.countPokemons = action.payload.count;
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
export const pokemonSliceActions = pokemonSlice.actions;

export default pokemonSlice.reducer;
