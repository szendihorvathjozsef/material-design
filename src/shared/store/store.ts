import { combineReducers, configureStore } from "@reduxjs/toolkit";
/* eslint-disable no-restricted-imports */
import {
	useStore,
	useDispatch,
	useSelector,
	TypedUseSelectorHook,
} from "react-redux";
/* eslint-enable no-restricted-imports */

import applicationReducer from "./app.slice";

const rootReducer = combineReducers({
	application: applicationReducer,
});

export function bootstrapStore(initialState?: Partial<RootState>) {
	const store = configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
	});

	return store;
}

const store: AppStore = bootstrapStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof bootstrapStore>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppStore = useStore as () => AppStore;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
