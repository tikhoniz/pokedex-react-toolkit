import React from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { pokemonSliceActions } from "../../store/reducers/pokemonSlice";
// utils
import { COLORS } from "../../utils/getColorTypes";
// material
import { List, ListItem, Typography } from "@mui/material";
// components
import Tag from "./Tag";

const Tags = () => {
	const { toggleTag } = pokemonSliceActions;
	const { tags } = useSelector((state) => state.pokemonReducer);
	const dispatch = useDispatch();

	const filterByTagHandler = (event) => {
		dispatch(toggleTag(event.target.innerText.toLowerCase()));
	};

	return (
		<>
			<Typography variant="h4" textAlign="center" marginTop="20px">
				Tags
			</Typography>
			<List
				disablePadding
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					mb: 6,
				}}
			>
				{Object.entries(COLORS).map((color, i) => (
					<ListItem key={i} sx={{ width: "auto" }}>
						<Tag
							title={color[0]}
							onClick={filterByTagHandler}
							active={tags.includes(color[0])}
							color={color[1]}
						/>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default Tags;
