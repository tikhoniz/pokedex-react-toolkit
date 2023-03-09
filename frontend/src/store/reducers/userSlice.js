import { createSlice } from "@reduxjs/toolkit";
import {
	authSocial,
	checkAuth,
	logout,
	setFavorite,
} from "../actionsCreators/userActions";

function isRejectedAction(action) {
	return action.type.endsWith("rejected");
}

const initialState = {
	user: null,
	isLoading: false,
	error: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(checkAuth.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload;
			})
			.addCase(checkAuth.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(authSocial.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload;
			})
			.addCase(authSocial.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(setFavorite.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload;
			})
			.addCase(setFavorite.pending, (state, action) => {
				state.isLoading = true;
			})

			.addCase(logout, (state, action) => {
				state.user = action.payload;
			})
			.addMatcher(isRejectedAction, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});
export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
