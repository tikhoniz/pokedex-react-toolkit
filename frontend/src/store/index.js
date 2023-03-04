import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./reducers/pokemonSlice";
// создаем основной редюсер
const rootReducer = combineReducers({
	pokemonReducer,
});

export default configureStore({
	reducer: rootReducer,
});
