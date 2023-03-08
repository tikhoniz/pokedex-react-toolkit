// material
import { styled } from "@mui/material";
// components
import PaginationComponent from "../Pagination";

const RootStyle = styled("footer")(({ theme }) => ({
	position: "fixed",
	zIndex: 1100,
	bottom: 0,
	left: 0,
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	width: "100%",
	backgroundColor: theme.palette.background.default,
	borderTop: '1px solid red',
	padding:'40px 0',
}));

const Footer = () => {
	return (
			<RootStyle>
					<PaginationComponent />
			</RootStyle>
	);
};

export default Footer;
