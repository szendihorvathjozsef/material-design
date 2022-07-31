type StorageTypes = "localStorage" | "sessionStorage";

const StorageType: StorageTypes = "localStorage";

const StorageImpl: Storage = window[StorageType];

const Storage = {
	read(key: string) {
		return StorageImpl.getItem(key);
	},
	write(key: string, value: string) {
		StorageImpl.setItem(key, value);
	},
	delete(key: string) {
		StorageImpl.removeItem(key);
	},
};

export default Storage;
