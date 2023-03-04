import mongoose from "mongoose";

const connectDB = async () => {
	try {
		mongoose.set("strictQuery", false);
		mongoose
			.connect(
				`mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.rlg3pld.mongodb.net/?retryWrites=true&w=majority`,
				{
					useNewUrlParser: true,
					useUnifiedTopology: true,
				}
			)
			.then((db) => console.log("Successful MongoDB connection"));
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
