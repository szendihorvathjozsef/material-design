import type { ComponentStyleConfig } from "@chakra-ui/react";
import { transparentize } from "color2k";

const Button: ComponentStyleConfig = {
	baseStyle: {
		borderRadius: "100px",
		padding: "10px, 24px, 10px, 24px",
		fontSize: 14,
		fontWeight: "500",
		lineHeight: 20,
		letterSpacing: "0.1px",
	},
	defaultProps: {
		variant: "filled",
	},
	variants: {
		filled: props => ({
			backgroundColor: "brand.primary",
			color: "brand.onPrimary",
			_hover: {
				backgroundColor: transparentize(props.theme.colors.brand.primary, 0.08),
				boxShadow: "elevation.1",

				_disabled: {
					boxShadow: "none",
					backgroundColor: transparentize(
						props.theme.colors.brand.disabled,
						0.78,
					),
				},
			},
			_focus: {
				boxShadow: "none",
				backgroundColor: transparentize(props.theme.colors.brand.primary, 0.12),
			},
			_disabled: {
				backgroundColor: transparentize(
					props.theme.colors.brand.disabled,
					0.78,
				),
				color: "brand.onSurface",
			},
		}),
		outlined: props => ({
			backgroundColor: "transparent",
			color: "brand.primary",
			borderWidth: "1px",
			borderStyle: "solid",
			borderColor: "brand.outline",
			_hover: {
				backgroundColor: transparentize(props.theme.colors.brand.primary, 0.92),
			},
			_focus: {
				backgroundColor: transparentize(props.theme.colors.brand.primary, 0.78),
			},
			_disabled: {
				backgroundColor: "transparent",
				color: "brand.onSurface",
			},
		}),
	},
};

export default Button;
