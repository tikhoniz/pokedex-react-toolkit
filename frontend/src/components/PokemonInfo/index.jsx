import {
	Box,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { pokemonSliceActions } from "../../store/reducers/pokemonSlice";
import getColorTypes from "../../utils/getColorTypes";
import Type from "../shared/Type";

const PokemonInfo = ({ pokemon }) => {
	const dispatch = useDispatch();
	const { setPokemon } = pokemonSliceActions;
	const { name, avatar, types, baseStats, abilities } = pokemon;

	const color = getColorTypes(types[0]);

	const statsNode = baseStats.map(([key, value], i) => (
		<ListItem key={i}>
			<ListItemText sx={{ fontSize: 18, mr: 5 }}>{key}</ListItemText>
			<ListItemText sx={{ textAlign: "right" }}>{value}</ListItemText>
		</ListItem>
	));

	const abilitiesNode = abilities.map((elem, i) => (
		<Type key={i} sx={{}} title={elem} color={color} />
	));

	const typesNode = types.map((type, i) => (
		<Type key={i} title={type} color={getColorTypes(type)} />
	));

	return (
		<>
			<CardHeader
				avatar={<CardMedia component="img" image={avatar} alt={name} />}
				action={
					<IconButton
						aria-label="close"
						onClick={() => dispatch(setPokemon(null))}
					>
						{/*<MoreVertIcon />*/}X
					</IconButton>
				}
				title={
					<Typography
						variant="h4"
						color="#ffffff"
						sx={{ fontWeight: 900, letterSpacing: 2 }}
					>
						{name}
					</Typography>
				}
				sx={{ bgcolor: color + "a8" }}
			/>

			<CardContent>
				<Stack
					direction="row"
					justifyContent="space-between"
					spacing={2}
					sx={{ mb: 4 }}
				>
					<Stack spacing={1} textAlign="center">
						<Typography variant="h6">Types</Typography>
						{typesNode}
					</Stack>
					<Stack spacing={1} textAlign="center" sx={{ width: 170 }}>
						<Typography variant="h6">Abilities</Typography>
						{abilitiesNode}
					</Stack>
				</Stack>

				<Stack direction="row" justifyContent="flex-start">
					<Box>
						<Typography variant="h6">Base Stats</Typography>
						<List
							dense
							sx={{
								width: "100%",
								bgcolor: "background.paper",
							}}
						>
							{statsNode}
						</List>
					</Box>
				</Stack>
			</CardContent>
		</>
	);
};

export default PokemonInfo;
