import React from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { pokemonSliceActions } from "../../store/reducers/pokemonSlice";
// material
import { styled, TextField } from "@mui/material";

const InputStyle = styled(TextField)({
	maxWidth: 380,
	"&.MuiFormControl-root": {
		backgroundColor: "#ef5350",
		"&:hover": {
			borderColor: "#FFFFFF",
		},
	},
	"& .MuiInputBase-input": {
		color: "#FFFFFF",
		fontSize: 18,
	},
	"& .MuiOutlinedInput-notchedOutline": {
		borderWidth: "3px",
		borderColor: "#f5f5f5",
	},
});

const FilterByName = () => {
	const { nameFilter } = useSelector((state) => state.pokemonReducer);
	const { filterItemByName } = pokemonSliceActions;
	const dispatch = useDispatch();

	const onChange = (event) => {
		event.preventDefault();
		dispatch(filterItemByName(event.target.value));
	};
	return (
		<InputStyle
			fullWidth
			onChange={onChange}
			value={nameFilter}
			variant="outlined"
			placeholder="Filter pokemon by name"
		/>
	);
};

export default FilterByName;
