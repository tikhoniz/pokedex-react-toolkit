// dto - data transfer object
export default class UserDto {
	constructor(model) {
		this.id = model._id;
		this.name = model.name;
		this.email = model.email;
		this.favorites = model.favorites;
	}
}
