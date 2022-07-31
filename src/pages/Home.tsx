import { Heading } from "@chakra-ui/react";
import Popover from "@/components/Popover";

const Home = () => {
	return (
		<div>
			<Heading>Home</Heading>
			<Popover placement="bottom" renderOverlay={<p>Hello</p>}>
				<button type="button">Open popver</button>
			</Popover>
		</div>
	);
};

export default Home;
