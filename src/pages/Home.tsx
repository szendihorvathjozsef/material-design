import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Icon,
	Input,
	InputGroup,
	InputLeftAddon,
} from "@chakra-ui/react";
import { MdOutlineAccountCircle, MdOutlineVpnKey } from "react-icons/md";
import { useForm } from "react-hook-form";

type FormFields = {
	username: string;
	password: string;
};

const Home = () => {
	const {
		register,
		formState: { errors, isSubmitting },
		handleSubmit,
	} = useForm<FormFields>();

	function onSubmit(values: FormFields) {}

	return (
		<div>
			<Heading>Home</Heading>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl isInvalid={!!errors.username?.message}>
					<FormLabel htmlFor="username">Username</FormLabel>
					<InputGroup>
						<InputLeftAddon
							pointerEvents="none"
							children={<Icon as={MdOutlineAccountCircle} />}
						/>
						<Input
							id="username"
							placeholder="Username"
							{...register("username", {
								required: "This field is mandatory.",
								minLength: { value: 4, message: "Minimum length should be 4." },
							})}
						/>
					</InputGroup>
					<FormErrorMessage>
						{errors.username && errors.username.message}
					</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={!!errors.password?.message}>
					<FormLabel htmlFor="password">Password</FormLabel>
					<InputGroup>
						<InputLeftAddon
							pointerEvents="none"
							children={<Icon as={MdOutlineVpnKey} />}
						/>
						<Input
							id="password"
							type="password"
							placeholder="password"
							{...register("password", {
								required: "This field is mandatory.",
							})}
						/>
					</InputGroup>
					<FormErrorMessage>
						{errors.password && errors.password.message}
					</FormErrorMessage>
				</FormControl>
				<Button
					mt={4}
					colorScheme="teal"
					isLoading={isSubmitting}
					type="submit"
				>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default Home;
