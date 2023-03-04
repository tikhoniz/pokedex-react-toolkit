import fetch from "node-fetch";
import PokemonDto from "../dtos/pokemon-dto.js";

export const getPokemonsByQuery = async (req, res, next) => {
	const [limit, offset] = req.params.query.split("&");

	try {
		const results = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
		)
			.then(async (response) => await response.json())
			.then(
				async (data) =>
					await Promise.all(
						data.results.map((pokemon) =>
							fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(
								(res) => res.json()
							)
						)
					)
			);

		const pokemonList = results.map((elem) => {
			return new PokemonDto(elem);
		});

		return res.json(pokemonList);
	} catch (err) {
		const error = new Error("Something went wrong");
		return next(error);
	}
};
