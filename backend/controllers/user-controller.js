import UserDto from "../dtos/user-dto.js";
import UserModel from "../models/user-model.js";

export const authSocial = async (req, res, next) => {
	try {
		const { name, email } = req.body;
		const user = await UserModel.findOne({ email: email });

		if (user) {
			const userDto = new UserDto(user);
			return res.json(userDto);
		} else {
			const newUser = await UserModel.create({
				name,
				email,
			});

			const userDto = new UserDto(newUser);
			return res.json(userDto);
		}
	} catch (err) {
		const error = new Error("Something went wrong");
		return next(error);
	}
};

export const setFavorite = async (req, res, next) => {
	try {
		const { pokId, userId } = req.body;

		const user = await UserModel.findOne({ _id: userId });

		let arr = user.favorites;

		const alreadyHas = arr.includes(pokId);

		if (alreadyHas) {
			user.favorites = arr.filter((it) => it !== pokId);
		} else {
			arr.push(pokId);
		}

		await user.save();

		const userDto = new UserDto(user);

		return res.json(userDto);
	} catch (err) {
		const error = new Error("Something went wrong");
		return next(error);
	}
};
