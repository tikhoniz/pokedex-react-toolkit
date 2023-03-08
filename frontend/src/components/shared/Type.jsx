import React from "react";
import { styled, Typography } from "@mui/material";

const LabelStyle = styled(Typography)({
	color: "#ffffff",
	fontSize: 16,
	fontWeight: 500,
	padding: "5px 20px",
	borderRadius: 9,
	textAlign: "center",
	boxShadow: "0 8px 16px 0 rgba(0,0,0,0.12)",
});

const Type = ({ title, color }) => {
	return <LabelStyle sx={{ background: color }}>{title}</LabelStyle>;
};

export default Type;
