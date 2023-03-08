// dto - data transfer object
export default class PokemonDto {
	constructor(model) {
		this.id = model.id;
		this.name = model.name.replace(model.name[0], model.name[0].toUpperCase());
		this.order = model.order;
		this.avatar = model.sprites.front_default;
		this.height = model.height;
		this.weight = model.weight;
		this.types = Array.from(model.types,(it)=> it.type.name) || [];
		this.abilities =  Array.from(model.abilities,(it)=> it.ability.name) || [];
		this.baseStats = Array.from(model.stats, (it => [it.stat.name, it.base_stat])) || [];

	}
}