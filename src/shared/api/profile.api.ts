import type { User } from "../types/user.type";
import { API_ENDPOINTS } from "./api-endpoints";
import axiosClient from "./axios-client";

const getProfile = (signal?: AbortSignal) =>
	axiosClient.get<User>(API_ENDPOINTS.profile, { signal });

const ProfileAPI = {
	getProfile,
};

export default ProfileAPI;
