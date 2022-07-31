import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Icon,
	Input,
	InputGroup,
	InputLeftAddon,
	Button,
	Container,
	Box,
} from "@chakra-ui/react";
import { MdOutlineAccountCircle, MdOutlineVpnKey } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import { authenticate } from "@/shared/store/app.slice";

type FormFields = {
	username: string;
	password: string;
};

const Login = () => {
	const {
		formState: { errors, isSubmitting },
		register,
		handleSubmit,
	} = useForm<FormFields>();
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const state = useAppSelector(appState => appState.application);

	function onSubmit(values: FormFields) {
		dispatch(authenticate(values));
	}

	if (state.isAuthenticated) {
		return <Navigate to="/" />;
	}

	return (
		<Container
			maxW="lg"
			h="100vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<Box bg="brand.surfaceVariant" flex="1" px="8" py="4" borderRadius={32}>
				<Heading color="blue.800" mb="4">
					Login
				</Heading>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormControl mb="4" isInvalid={!!errors.username?.message}>
						<FormLabel color="blue.800" htmlFor="username">
							{t("common:field.username")}
						</FormLabel>
						<InputGroup>
							<InputLeftAddon
								bg="brand.tertiary"
								color="brand.onTertiary"
								pointerEvents="none"
								children={<Icon as={MdOutlineAccountCircle} />}
							/>
							<Input
								id="username"
								placeholder={t("common:field.username")}
								{...register("username", {
									required: t("validation:required"),
								})}
							/>
						</InputGroup>
						<FormErrorMessage>
							{errors.username && errors.username.message}
						</FormErrorMessage>
					</FormControl>
					<FormControl mb="2" isInvalid={!!errors.password?.message}>
						<FormLabel color="blue.800" htmlFor="password">
							{t("common:field.password")}
						</FormLabel>
						<InputGroup>
							<InputLeftAddon
								bg="brand.tertiary"
								color="brand.onTertiary"
								pointerEvents="none"
								children={<Icon as={MdOutlineVpnKey} />}
							/>
							<Input
								id="password"
								type="password"
								placeholder={t("common:field.password")}
								{...register("password", {
									required: t("validation:required"),
								})}
							/>
						</InputGroup>
						<FormErrorMessage>
							{errors.password && errors.password.message}
						</FormErrorMessage>
					</FormControl>
					<Button
						mt={4}
						isLoading={isSubmitting}
						type="submit"
						variant="outlined"
					>
						{t("common:button.login")}
					</Button>
				</form>
			</Box>
		</Container>
	);
};

export default Login;
