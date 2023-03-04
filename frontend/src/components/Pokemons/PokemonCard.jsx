import React from "react";
// material
import { Card, CardMedia, Stack, styled, Typography } from "@mui/material";
import getColorTypes from "../../utils/getColorTypes";

const RootStyle = styled(Card)(({ ownerState }) => ({
	position: "relative",
	padding: 20,
	paddingTop: 40,
	backgroundColor: ownerState.colorType,
	borderRadius: 16,
}));

const LabelStyle = styled(Typography)({
	color: "#ffffff",
	fontSize: 16,
	fontWeight: 500,
	background: "#FFFFFF67",
	padding: "5px 20px",
	borderRadius: 9,
	textAlign: "center",
	boxShadow: "0 8px 16px 0 rgba(0,0,0,0.12)",
});

const PokemonCard = ({ item }) => {
	const { id, name, avatar, types } = item;

	const colorType = getColorTypes(types[0].type?.name);

	const pokemonId =
		String(id).length > 4 ? `#${id} ` : `#${("0000" + id).slice(-4)}`;

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
				{name.replace(name[0], name[0].toUpperCase())}
			</Typography>

			<Typography
				component="h3"
				sx={{
					position: "absolute",
					top: 0,
					left: 17,
					fontSize: "30px",
					fontWeight: 700,
					display: "block",
					color: "#ffffffa6",
				}}
			>
				{pokemonId}
			</Typography>

			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="flex-end"
				spacing={2}
			>
				<Stack spacing={1}>
					{types.map((t, i) => (
						<LabelStyle key={i}>{t?.type?.name}</LabelStyle>
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
		</RootStyle>
	);
};

export default PokemonCard;
