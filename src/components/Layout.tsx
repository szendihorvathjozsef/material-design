import { Link as RouterLink } from "react-router-dom";
import {
	Button,
	Container,
	Grid,
	GridItem,
	Heading,
	Icon,
	Link,
	List,
	ListIcon,
	ListItem,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import type * as React from "react";
import { MdHomeFilled, MdArrowDownward } from "react-icons/md";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<Container maxW="6xl" h="100vh">
			<Grid
				templateAreas={`
        "aside header"
        "aside content"
      `}
			>
				<GridItem as="header" area="header">
					<Menu styleConfig={{ alignSelf: "right" }}>
						<MenuButton as={Button} rightIcon={<Icon as={MdArrowDownward} />}>
							Actions
						</MenuButton>
						<MenuList>
							<MenuItem>Download</MenuItem>
							<MenuItem>Create a Copy</MenuItem>
							<MenuItem>Mark as Draft</MenuItem>
							<MenuItem>Delete</MenuItem>
							<MenuItem>Attend a Workshop</MenuItem>
						</MenuList>
					</Menu>
				</GridItem>
				<GridItem as="aside" area="aside">
					<Heading>Application with Material Design</Heading>

					<List>
						<ListItem>
							<ListIcon as={MdHomeFilled} />
							<Link as={RouterLink} to="/">
								Home
							</Link>
						</ListItem>
						<ListItem>
							<Link as={RouterLink} to="/user-management">
								User Management
							</Link>
						</ListItem>
					</List>
				</GridItem>
				<GridItem as="section" area="content">
					{children}
				</GridItem>
			</Grid>
		</Container>
	);
};

export default Layout;
