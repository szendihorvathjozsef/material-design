import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

let baseURL = "localhost:8000";

if (import.meta.env.PROD) {
	baseURL = "192.168.0.100:800";
}

const axiosClient = axios.create({ baseURL });

function handleRequestFulfilled(config: AxiosRequestConfig) {}

function handleResponseFulfilled(response: AxiosResponse) {}

function handleResponseRejected(error: unknown) {
	if (axios.isCancel(error)) {
		return Promise.resolve(error);
	}

	if (axios.isAxiosError(error)) {
		return Promise.reject(error);
	}
}

axiosClient.interceptors.request.use(handleRequestFulfilled);

axiosClient.interceptors.response.use(
	handleResponseFulfilled,
	handleResponseRejected,
);

export default axiosClient;
