// material
import { Box, styled } from "@mui/material";
import { useSelector } from "react-redux";
// components
import PokemonCard from "./PokemonCard";

const GridStyle = styled(Box)({
	display: "grid",
	gridTemplateColumns: `repeat(auto-fill, minmax(240px, 1fr))`,
	gridGap: "15px 15px",
});

const Pokemons = ({ items }) => {
	const { user } = useSelector((state) => state.userReducer);

	console.log("items", items);

	return (
		<GridStyle>
			{items.map((item) => {
				const isFavorite = user?.favorites?.includes(String(item?.id));
				return (
					<PokemonCard
						key={item?.id}
						item={item}
						isFavorite={isFavorite}
						userId={user?.id}
					/>
				);
			})}
		</GridStyle>
	);
};

export default Pokemons;
