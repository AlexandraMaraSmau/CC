import React from "react";
import Box from "@mui/material/Box";

export default function Background() {
	return (
		<Box
			sx={{
				backgroundColor: "#f2f6fc",
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: -1,
			}}
		/>
	);
}
