// material
import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

// ----------------------------------------------------------------------

const RootStyle = styled("div")({
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	zIndex: 999,
	position: "fixed",
	background: "#fff",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

// ----------------------------------------------------------------------

export default function LoadingScreen() {
	return (
		<RootStyle>
			<CircularProgress />
		</RootStyle>
	);
}
