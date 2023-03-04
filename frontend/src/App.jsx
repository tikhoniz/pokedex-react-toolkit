import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "./store/actionsCreators/pokemonActions";

const App = () => {
	const dispatch = useDispatch();
	const { pokemons } = useSelector((state) => state.pokemonReducer);

	useEffect(() => {
		dispatch(getPokemonList({ limit: 50, offset: 0 }));
	}, []);

	console.log(pokemons);

	return <div>Pokemons</div>;
};

export default App;
