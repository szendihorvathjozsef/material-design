import * as React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import Layout from "@/components/Layout";
import SuspenseLoading from "@/components/SuspenseLoading";
import { theme } from "@/shared/theme";
import Login from "@/pages/Login";
import AuthRequired from "@/components/AuthRequired";
import { store } from "@/shared/store";
// eslint-disable-next-line import/order
import "./i18n";

const Home = React.lazy(() => import("@/pages/Home"));

function App() {
	return (
		<ReduxProvider store={store}>
			<ChakraProvider resetCSS theme={theme}>
				<React.Suspense fallback={<SuspenseLoading />}>
					<BrowserRouter>
						<Routes>
							<Route path="/login" element={<Login />} />
							<Route
								path="/"
								element={
									<AuthRequired>
										<Layout>
											<Outlet />
										</Layout>
									</AuthRequired>
								}
							>
								<Route index element={<Home />} />
							</Route>
						</Routes>
					</BrowserRouter>
				</React.Suspense>
			</ChakraProvider>
		</ReduxProvider>
	);
}

export default App;
