import React from "react";
// material
import { Stack, Typography } from "@mui/material";
// components
import SelectItem from "./SelectItem";
import { useDispatch, useSelector } from "react-redux";
import { pokemonSliceActions } from "../../store/reducers/pokemonSlice";

const SelectComponent = () => {
	const { itemPerPage } = useSelector((state) => state.pokemonReducer);
	const dispatch = useDispatch();
	const { changeItemPerPage } = pokemonSliceActions;

	const handleItemPerPage = (value) => {
		dispatch(changeItemPerPage(value));
	};

	return (
		<Stack
			spacing={1}
			direction="row"
			justifyContent="center"
			alignItems="center"
		>
			<Typography
				gutterBottom
				component="p"
				sx={{
					margin: 0,
					letterSpacing: 1,
				}}
			>
				Pokemos per page:
			</Typography>
			<Stack direction="row" spacing={2}>
				{[10, 20, 50].map((value) => (
					<SelectItem
						key={value}
						value={value}
						active={itemPerPage === value}
						onClickHandler={handleItemPerPage}
					/>
				))}
			</Stack>
		</Stack>
	);
};

export default SelectComponent;
