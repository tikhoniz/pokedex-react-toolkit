import { useDispatch } from "react-redux";
import { LoginSocialFacebook } from "reactjs-social-login";
import { authSocial } from "../../store/actionsCreators/userActions";
// material
import { styled } from "@mui/material";
// icons
import facebookImg from "../../assets/facebook.svg";

const ButtonStyle = styled("button")({
	boxSizing: "border-box",
	position: "relative",
	padding: "0 15px 0 46px",
	border: "none",
	textAlign: "left",
	lineHeight: "34px",
	whiteSpace: "nowrap",
	borderRadius: "0.2em",
	fontSize: "16px",
	color: " #FFF",
	cursor: "pointer",
	width: "100%",
	"&:before": {
		content: '""',
		boxSizing: "border-box",
		position: "absolute",
		top: 0,
		left: 0,
		width: "34px",
		height: " 100%",
		background: `url(${facebookImg}) center / contain no-repeat`,
	},
	"&:active": {
		boxShadow: "inset 0 0 0 32px rgba(0,0,0,0.1)",
	},
	backgroundColor: "#4C69BA",
	backgroundImage: "linear-gradient(#4C69BA, #3B55A0)",
	textShadow: "0 -1px 0 #354C8C",
	"&:hover": {
		backgroundColor: "#5B7BD5",
		backgroundImage: "linear-gradient(#5B7BD5, #4864B1)",
	},
});

const FacebookLoginButton = () => {
	const dispatch = useDispatch();

	console.log(
		"process.env.REACT_APP_FB_APP_ID",
		process.env.REACT_APP_FB_APP_ID
	);
	const onLoginSuccess = (profile) => {
		const userObject = {
			email: profile.email,
			name: profile.first_name,
		};
		dispatch(authSocial({ userObject }));
	};

	return (
		<LoginSocialFacebook
			appId={"867037747700138"}
			onResolve={({ data }) => {
				onLoginSuccess(data);
			}}
			onReject={(err) => {
				console.log("LoginSocialFacebook err", err);
			}}
		>
			<ButtonStyle>Log In</ButtonStyle>
		</LoginSocialFacebook>
	);
};

export default FacebookLoginButton;
