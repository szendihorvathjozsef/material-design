import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import SuspenseLoading from "@/components/SuspenseLoading";
import theme from "@/shared/theme";

const Home = React.lazy(() => import("@/pages/Home"));

function App() {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<React.Suspense fallback={<SuspenseLoading />}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</React.Suspense>
		</ChakraProvider>
	);
}

export default App;
