import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./db/mongo.js";

const app = express();

// connect to database
connectDB();

const PORT = process.env.PORT;

app.use(cors({ credentials: true, origin: true }));

app.listen(PORT, () => {
	console.log(
		`Server on running in development mode on port ${process.env.PORT}`
	);
});
