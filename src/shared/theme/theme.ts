import { extendTheme } from "@chakra-ui/react";
import Button from "./components/button";
import { Icon } from "./components/icon";
import { Input, FormError } from "./components/input";
import { colors } from "./foundation/colors";
import { elevation } from "./foundation/elevation";

export const theme = extendTheme({
	fonts: {
		body: "'Roboto Flex', sans-serif",
		heading: "'Roboto Flex', sans-serif",
		mono: "'Roboto Flex', sans-serif",
	},
	colors,
	shadows: elevation,
	components: {
		Button,
		Icon,
		Input,
		FormError,
	},
});

export default theme;
