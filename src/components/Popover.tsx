import * as React from "react";
import { chakra, HStack, Icon, IconButton, Text } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import {
	useFloating,
	offset,
	flip,
	shift,
	autoUpdate,
	Placement,
	useClick,
	useDismiss,
	useInteractions,
	useRole,
	FloatingFocusManager,
	FloatingPortal,
	useId,
} from "@floating-ui/react-dom-interactions";

export type PopoverOverlayProps = {
	onClose: () => void;
	labelId: string;
	descriptionId: string;
};

type Props = {
	placement: Placement;
	children: JSX.Element;
	renderOverlay: ((props: PopoverOverlayProps) => JSX.Element) | JSX.Element;
};

const Popover = ({ placement, children, renderOverlay }: Props) => {
	const [open, setOpen] = React.useState(false);

	const { x, y, reference, floating, strategy, context } = useFloating({
		open,
		onOpenChange: setOpen,
		middleware: [offset(5), flip(), shift()],
		placement,
		whileElementsMounted: autoUpdate,
	});

	const id = useId();
	const labelId = `${id}-label`;
	const descriptionId = `${id}-description`;

	const { getReferenceProps, getFloatingProps } = useInteractions([
		useClick(context),
		useRole(context),
		useDismiss(context),
	]);

	function handleClose() {
		setOpen(false);
	}

	let content: JSX.Element;

	if (typeof renderOverlay === "function") {
		content = renderOverlay({ labelId, descriptionId, onClose: handleClose });
	} else {
		content = (
			<HStack>
				<Text flex={1}>{renderOverlay}</Text>
				<IconButton
					p={0}
					m={0}
					minW="initial"
					variant="link"
					aria-label="Close popover"
					icon={<MdClose />}
					onClick={handleClose}
				/>
			</HStack>
		);
	}

	return (
		<>
			{React.cloneElement(
				children,
				getReferenceProps({ ref: reference, ...children.props }),
			)}
			<FloatingPortal>
				{open && (
					<FloatingFocusManager context={context}>
						<chakra.div
							bg="brand.primaryContainer"
							boxShadow="elevation.1"
							borderRadius="100px"
							px="4"
							py="3"
							{...getFloatingProps({
								className: "m-popover",
								ref: floating,
								style: {
									position: strategy,
									top: y ?? 0,
									left: x ?? 0,
								},
								"aria-labelledby": labelId,
								"aria-describedby": descriptionId,
							})}
						>
							{content}
						</chakra.div>
					</FloatingFocusManager>
				)}
			</FloatingPortal>
		</>
	);
};

export default Popover;
