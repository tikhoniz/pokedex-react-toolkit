import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./reducers/pokemonSlice";
import userReducer from "./reducers/userSlice";
// создаем основной редюсер
const rootReducer = combineReducers({
	userReducer,
	pokemonReducer,
});

export default configureStore({
	reducer: rootReducer,
});
