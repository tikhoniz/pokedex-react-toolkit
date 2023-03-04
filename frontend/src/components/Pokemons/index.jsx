import { useSelector } from "react-redux";
// material
import { Box, styled } from "@mui/material";
// components
import PokemonCard from "./PokemonCard";
import Pagination from "../Pagination";

const GridStyle = styled(Box)({
	display: "grid",
	gridTemplateColumns: `repeat(auto-fill, minmax(240px, 1fr))`,
	gridGap: "15px 15px",
});

const Pokemons = () => {
	const { pokemons, isLoading } = useSelector((state) => state.pokemonReducer);
	return (
		<>
			<GridStyle>
				{pokemons.map((p) => (
					<PokemonCard key={p.id} item={p} />
				))}
			</GridStyle>

			<Pagination />
		</>
	);
};

export default Pokemons;
