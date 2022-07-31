import { API_ENDPOINTS } from "./api-endpoints";
import axiosClient from "./axios-client";

const authenticate = (
	username: string,
	password: string,
	signal?: AbortSignal,
) =>
	axiosClient.post<{ accessToken: string; refreshToken: string }>(
		API_ENDPOINTS.authenticate,
		{ username, password },
		{ signal },
	);

const UserAPI = {
	authenticate,
};

export default UserAPI;
