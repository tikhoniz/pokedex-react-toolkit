import { Pagination} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonList } from '../../store/actionsCreators/pokemonActions';

const PaginationComponent = () => {
	const [pageQty, setPageQty] = useState(20);
	const [page, setPage] = useState(1);

	const dispatch = useDispatch();
	const {countPokemons, isLoading } = useSelector((state) => state.pokemonReducer);

	useEffect(() => {
		let offset = pageQty * (page - 1);
		dispatch(getPokemonList({ limit: pageQty, offset }));
	}, [pageQty, page]);

	return (
		<Pagination
		showFirstButton
		showLastButton
		count={Math.ceil(countPokemons/pageQty)}
		page={page}
		onChange={(_, num) => setPage(num)}
		color="primary"
		disabled={isLoading}
	/> 
	)
}

export default PaginationComponent