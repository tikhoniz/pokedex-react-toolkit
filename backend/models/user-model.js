import { Schema, model } from "mongoose";

const UserSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, unique: true, required: true },
		favorites: { type: [String], default: [] },
	},
	{ timestamps: true }
);

export default model("User", UserSchema);
