import { useDispatch, useSelector } from "react-redux";
// store
import { logout } from "../../store/actionsCreators/userActions";
// material
import {
	AppBar,
	Button,
	Stack,
	styled,
	Toolbar,
	Typography,
} from "@mui/material";
// components
import FilterByName from "../Filter";
import FacebookLoginButton from "../Auth/FacebookLoginButton";

const APP_BAR_DESKTOP = "92px";

const ToolbarStyle = styled(Toolbar)({
	justifyContent: "space-between",
	height: APP_BAR_DESKTOP,
	columnGap: 40,
});

const Header = () => {
	const { user } = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();

	return (
		<AppBar
			id="header"
			sx={{
				justifyContent: "space-between",
				backgroundColor: "#ef5350",
			}}
		>
			<ToolbarStyle>
				<Typography variant="h6" component="h1">
					Pokedex
				</Typography>

				<FilterByName />
				{user ? (
					<Stack alignItems="center" sx={{ minWidth: 130 }}>
						<Typography variant="h6" sx={{ mb: 1 }}>
							Hi, {user.name}!
						</Typography>
						<Button
							size="small"
							variant="contained"
							onClick={() => dispatch(logout())}
						>
							LogOut
						</Button>
					</Stack>
				) : (
					<FacebookLoginButton />
				)}
			</ToolbarStyle>
		</AppBar>
	);
};

export default Header;
