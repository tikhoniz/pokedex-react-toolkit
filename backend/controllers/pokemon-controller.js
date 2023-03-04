import fetch from "node-fetch";
import PokemonDto from "../dtos/pokemon-dto.js";

export const getPokemonsByQuery = async (req, res, next) => {
	const [limit, offset] = req.params.query.split("&");

	let count = 0;
	try {
		const results = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
			//`https://pokeapi.co/api/v2/pokemon?offset=30`
		)
			.then(async (response) => await response.json())
			.then(data=>{
				count = data.count;
				return data;
			})
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

		return res.json({pokemonList, count});
	} catch (err) {
		const error = new Error("Something went wrong");
		return next(error);
	}
};
