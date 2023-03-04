import { Container } from "@mui/material";
import React from "react";
// components
import Pokemons from "./components/Pokemons";

const App = () => {
	return (
		<Container maxWidth="xl">
			<Pokemons />
		</Container>
	);
};

export default App;
