import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProfileAPI from "../api/profile.api";
import UserAPI from "../api/user.api";
import {
	APPLICATION_ACCESS_TOKEN,
	APPLICATION_REFRESH_TOKEN,
} from "../constants";
import Storage from "../storage-impl";
import { SliceStatus } from "../types/common.type";
import type { User } from "../types/user.type";

type ApplicationState = {
	status: SliceStatus;
	user: User | null;
	isAuthenticated: boolean;
	error: unknown;
};

const initialState: ApplicationState = {
	status: SliceStatus.Idle,
	user: null,
	isAuthenticated: false,
	error: null,
};

type AuthenticatePayload = {
	username: string;
	password: string;
};

export const authenticate = createAsyncThunk(
	"app/authenticate",
	async ({ username, password }: AuthenticatePayload, { signal }) => {
		Storage.write(APPLICATION_ACCESS_TOKEN, "authenticated");
		Storage.write(APPLICATION_REFRESH_TOKEN, "authenticated_refresh");

		/* const { data } = await UserAPI.authenticate(username, password, signal);

		Storage.write(APPLICATION_ACCESS_TOKEN, data.accessToken);
		Storage.write(APPLICATION_REFRESH_TOKEN, data.refreshToken);

		const response = await ProfileAPI.getProfile(signal);

		return response.data; */

		return Promise.resolve<User>({
			id: "mock_user",
			metadata: { name: "Mock User" },
			spec: { username, email: "mock_user@mock" },
		});
	},
);

const app = createSlice({
	name: "app",
	initialState,
	reducers: {
		setAsAuthenticated: (state, action: PayloadAction<User>) => {
			state.isAuthenticated = true;
			state.error = null;
			state.status = SliceStatus.Fulfilled;
			state.user = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(authenticate.pending, state => {
			state.status = SliceStatus.Pending;
		});
		builder.addCase(authenticate.fulfilled, (state, action) => {
			state.status = SliceStatus.Fulfilled;
			state.isAuthenticated = true;
			state.error = null;
			state.user = action.payload;
		});
		builder.addCase(authenticate.rejected, (state, action) => {
			state.status = SliceStatus.Rejected;
			state.isAuthenticated = false;
			state.error = action.payload ?? action.error;
			state.user = null;
		});
	},
});

export default app.reducer;

export const { setAsAuthenticated } = app.actions;
