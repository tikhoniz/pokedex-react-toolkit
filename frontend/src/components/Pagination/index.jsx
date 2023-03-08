import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "../../store/actionsCreators/pokemonActions";
import { pokemonSliceActions } from "../../store/reducers/pokemonSlice";
// material
import { Pagination } from "@mui/material";

const PaginationComponent = () => {
	const [page, setPage] = useState(1);
	const { filterItemByName, clearTags } = pokemonSliceActions;

	const dispatch = useDispatch();
	const { countPokemons, itemPerPage, isLoading } = useSelector(
		(state) => state.pokemonReducer
	);

	const changePageHandler = (_, num) => {
		setPage(num);
		dispatch(filterItemByName(""));
		dispatch(clearTags());
	};

	useEffect(() => {
		let offset = itemPerPage * (page - 1);
		dispatch(getPokemonList({ limit: itemPerPage, offset }));
	}, [itemPerPage, page]);

	return (
		<Pagination
			showFirstButton
			showLastButton
			count={Math.ceil(countPokemons / itemPerPage)}
			page={page}
			onChange={changePageHandler}
			color="primary"
			disabled={isLoading}
			size="large"
		/>
	);
};

export default PaginationComponent;
