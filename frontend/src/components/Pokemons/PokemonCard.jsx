import React from "react";
import { useDispatch } from "react-redux";
// material
import {
	Box,
	Card,
	CardMedia,
	IconButton,
	Stack,
	styled,
	Typography,
} from "@mui/material";
// store
import { pokemonSliceActions } from "../../store/reducers/pokemonSlice";
import { setFavorite } from "../../store/actionsCreators/userActions";
// utils
import getColorTypes from "../../utils/getColorTypes";
// components
import Type from "../shared/Type";
// icons
import starIcon from "../../assets/star.svg";
import starIcoBorder from "../../assets/star-border.svg";

const RootStyle = styled(Card)(({ ownerState }) => ({
	position: "relative",
	padding: 20,
	paddingTop: 40,
	backgroundColor: ownerState.colorType,
	borderRadius: 16,
}));

const PokemonCard = ({ item, userId, isFavorite }) => {
	const { id, name, avatar, types } = item;
	const { setPokemon } = pokemonSliceActions;
	const dispatch = useDispatch();

	const colorType = getColorTypes(types[0]) + "a8";

	const pokemonId =
		String(id).length > 4 ? `#${id} ` : `#${("0000" + id).slice(-3)}`;

	const setFavoriteHandler = () => {
		dispatch(setFavorite({ pokId: id.toString(), userId }));
	};

	const openModalHandler = () => {
		dispatch(setPokemon(item));
	};

	return (
		<RootStyle ownerState={{ colorType }}>
			<Typography
				gutterBottom
				component="h2"
				sx={{
					fontSize: "36px",
					display: "block",
					fontWeight: 900,
					color: "#ffffff",
					whiteSpace: "nowrap",
					textOverflow: " ellipsis",
					overflow: "hidden",
				}}
			>
				{name}
			</Typography>
			{userId && (
				<IconButton
					onClick={() => dispatch(setFavoriteHandler)}
					sx={{
						position: "absolute",
						top: 0,
						right: 0,
						color: "inherit",
						zIndex: 399,
						cursor: "pointer",
					}}
				>
					<img src={isFavorite ? starIcon : starIcoBorder} alt="favorite" />
				</IconButton>
			)}

			<Typography
				component="h3"
				sx={{
					position: "absolute",
					top: 5,
					left: 17,
					fontSize: "30px",
					fontWeight: 700,
					display: "block",
					color: "#ffffffa6",
				}}
			>
				{pokemonId}
			</Typography>
			<Box
				onClick={() => dispatch(openModalHandler)}
				sx={{
					cursor: "pointer",
					padding: "10px",
					borderRadius: 4,
					transition: "all 560ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
					"&:hover": {
						boxShadow:
							"rgb(145 158 171 / 24%) 0px 0px 4px 0px, rgb(145 158 171 / 54%) 0px 24px 48px 0px",
						transform: "translateY(-4px)",
						transition: "all 560ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
					},
				}}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="flex-end"
					spacing={2}
				>
					<Stack spacing={1}>
						{types.map((type, i) => (
							<Type key={i} title={type} color={getColorTypes(type)} />
						))}
					</Stack>
					{avatar && (
						<CardMedia
							component="img"
							height="96"
							image={avatar}
							title={name}
							sx={{ objectFit: "contain", width: "auto" }}
						/>
					)}
				</Stack>
			</Box>
		</RootStyle>
	);
};

export default PokemonCard;
