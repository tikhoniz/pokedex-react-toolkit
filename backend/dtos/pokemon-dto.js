// dto - data transfer object
export default class PokemonDto {
	constructor(model) {
		this.id = model.id;
		this.name = model.name;
		this.order = model.order;
		this.avatar = model.sprites.front_default;
		this.height = model.height;
		this.weight = model.weight;
		this.types = model.types;
		this.abilities = model.abilities;
	}
}
