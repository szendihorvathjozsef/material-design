import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { MemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event/dist/types/setup";
import { Options } from "@testing-library/user-event/dist/types/options";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type WrapperProps = {
	children?: React.ReactNode;
};

type CustomRenderOptions = {
	history?: MemoryHistory;
	queryClient?: QueryClient;
	userEventOptions?: Options;
	route?: string;
} & RenderOptions;

type CustomRenderReturnValue = {
	user: UserEvent;
} & RenderResult;

const customRender = (
	ui: React.ReactElement,
	options?: CustomRenderOptions,
): CustomRenderReturnValue => {
	const {
		queryClient = new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
					cacheTime: 0,
					retry: false,
				},
			},
		}),
		route = "/",
		userEventOptions,
		...renderOptions
	} = options ?? {};

	window.history.pushState({}, "Test Page", route);

	const Wrapper = ({ children }: WrapperProps) => (
		<QueryClientProvider client={queryClient}>
			<MemoryRouter>{children}</MemoryRouter>
		</QueryClientProvider>
	);

	return {
		user: userEvent.setup(userEventOptions),
		...render(ui, { wrapper: Wrapper, ...renderOptions }),
	};
};

// re-export everything
export * from "@testing-library/react";
export * from "@testing-library/user-event";

// override render method
export { customRender as render };
