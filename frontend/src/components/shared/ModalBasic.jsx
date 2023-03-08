// material
import { Card } from "@mui/material";
import { ModalUnstyled } from "@mui/base";
import { styled } from "@mui/material";

const StyledModal = styled(ModalUnstyled)`
	position: fixed;
	z-index: 1300;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10%;
`;

const Backdrop = styled("div")`
	z-index: -1;
	position: fixed;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.8);
	-webkit-tap-highlight-color: transparent;
`;

const ModalBasic = ({ open, onClose, children, sx }) => {
	return (
		<StyledModal
			open={open}
			onClose={onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			slots={{ backdrop: Backdrop }}
			closeAfterTransition={true}
		>
			<Card
				sx={{
					position: "relative",
					minWidth: "300px",
					maxWidth: "536px",
					maxHeight: "100%",
					width: "100%",
					overflowY: "scroll",
					...sx,
				}}
			>
				{children}
			</Card>
		</StyledModal>
	);
};

export default ModalBasic;
