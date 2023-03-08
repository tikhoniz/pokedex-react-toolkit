import { Button, styled } from "@mui/material";
import React from "react";

const ButtonStyle = styled("button")(({ theme, ownerState }) => ({
	padding: "6px 15px",
	backgroundColor: ownerState.color,
	border: "1px solid #999",
	fontSize: 20,
	color: "#ffffff",
	cursor: "pointer",
	boxShadow: "0 6px 8px 0 rgba(0,0,0,0.85)",
	borderRadius: 6,
	transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
	opacity: 0.5,
	"&:hover": {
		opacity: 0.8,
	},
	...(ownerState.active && {
		boxShadow: "none",
		opacity: 1,
		outline: "solid 4px #2FFF00",
	}),
}));

const Tag = ({ title, onClick, active, color }) => {
	return (
		<ButtonStyle
			size="small"
			variant="contained"
			onClick={onClick}
			ownerState={{ active, color }}
		>
			{title}
		</ButtonStyle>
	);
};

export default Tag;
