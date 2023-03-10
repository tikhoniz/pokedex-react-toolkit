import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonSliceActions } from "./store/reducers/pokemonSlice";
import { checkAuth } from "./store/actionsCreators/userActions";
// material
import { Container } from "@mui/material";
// components
import Tags from "./components/Tags";
import Footer from "./components/Footer";
import Pokemons from "./components/Pokemons";
import SelectComponent from "./components/Select";
import PokemonInfo from "./components/PokemonInfo";
import ModalBasic from "./components/shared/ModalBasic";
import LoadingScreen from "./components/shared/LoadingScreen";
// lazy
const Header = lazy(() => import("./components/Header"));

const App = () => {
	const { pokemon, pokemons, nameFilter, tags, isLoading, error } = useSelector(
		(state) => state.pokemonReducer
	);
	const dispatch = useDispatch();
	const { setPokemon } = pokemonSliceActions;

	useEffect(() => {
		dispatch(checkAuth());
	}, []);

	const filteredPokemons = (array, nameFilter, tags) => {
		let filtered = array;

		if (tags.length > 0 && filtered) {
			filtered = array.filter((item) =>
				item.types.some((type) => tags.some((tag) => tag === type))
			);
		}

		if (nameFilter && filtered) {
			filtered = array.filter((item) =>
				item.name.toLowerCase().startsWith(nameFilter.toLowerCase())
			);
		}

		return filtered || [];
	};

	return (
		<>
			<Container maxWidth="xl" sx={{ pt: 16, pb: 16 }}>
				<Header />
				<SelectComponent />
				<Tags />
				{error && <h2>{error.message}</h2>}
				{isLoading && pokemons ? (
					<LoadingScreen />
				) : (
					<Pokemons items={filteredPokemons(pokemons, nameFilter, tags)} />
				)}
				<Footer />
			</Container>
			<ModalBasic
				open={!!pokemon}
				onClose={() => dispatch(setPokemon(null))}
				sx={{ borderRadius: "16px" }}
			>
				<PokemonInfo pokemon={pokemon} />
			</ModalBasic>
		</>
	);
};

export default App;
