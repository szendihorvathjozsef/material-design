export const APPLICATION_STORAGE_ID = "@app";

export const createStorageKey = (key: string) =>
	`${APPLICATION_STORAGE_ID}_${key}`;

export const APPLICATION_ACCESS_TOKEN = createStorageKey("access_token");
export const APPLICATION_REFRESH_TOKEN = createStorageKey("refresh_token");
