import type { ComponentStyleConfig } from "@chakra-ui/react";

export const FormError: ComponentStyleConfig = {
	baseStyle: {
		text: {
			color: "brand.error",
		},
	},
};

export const Input: ComponentStyleConfig = {
	defaultProps: {
		variant: "outline",
	},
	variants: {
		outline: props => ({
			field: {
				borderColor: "brand.outline",

				_hover: {
					borderColor: "brand.onSurface",
				},
				_placeholder: {
					color: "brand.outline",
				},
				_focusVisible: {
					boxShadow: `0 0 0 1px ${props.theme.colors.brand.primary}`,
					borderColor: "brand.primary",
				},
				_invalid: {
					boxShadow: `0 0 0 1px ${props.theme.colors.brand.error}`,
					borderColor: "brand.error",
				},
			},
		}),
	},
};
