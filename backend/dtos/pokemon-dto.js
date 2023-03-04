// dto - data transfer object
export default class PokemonDto {
	constructor(model) {
		this.name = model.name;
		this.order = model.order;
		this.avatar = model.sprites.front_default;
	}
}
