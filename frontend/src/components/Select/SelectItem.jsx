import React from "react";
// material
import { Button } from "@mui/material";

const SelectItem = ({ value, active, onClickHandler }) => {
	return (
		<Button
			size="small"
			type="button"
			variant="contained"
			sx={{
				backgroundColor: active ? "#0074eced" : "#ed706e",
				fontSize: "18px",
			}}
			onClick={() => onClickHandler(value)}
		>
			{value}
		</Button>
	);
};

export default SelectItem;
