import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./db/mongo.js";
import pokemonRoutes from "./routes/pokemonRoutes.js";
import usersRoutes from "./routes/userRoutes.js";

const app = express();

// connect to database
connectDB();

const PORT = process.env.PORT;

app.use(cors({ credentials: true, origin: true }));
app.use(express.json({ limit: "50mb" }));
// routs
app.use("/api/pokemons", pokemonRoutes);
app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
	console.log(
		`Server on running in development mode on port ${process.env.PORT}`
	);
});
