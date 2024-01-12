import React from "react";
import {
	AppBar,
	IconButton,
	Avatar,
	Container,
	Toolbar,
	Typography,
} from "@mui/material";
import { useRouter } from "next/router";

export default function SimpleHeader() {
	const router = useRouter();

	const handleClickLogo = () => {
		router.push("/");
	};

	return (
		<AppBar position="static" sx={{ height: "fit-content" }}>
			<Container maxWidth="xl" onClick={handleClickLogo}>
				<Toolbar disableGutters>
					<IconButton sx={{ p: 0, mr: 2 }}>
						<Avatar alt="Cats Logo" src="logo.png" />
					</IconButton>
					<Typography>
						<strong>
							<span style={{ color: "#ffffff" }}>Connect</span>
							<span style={{ color: "#fcad03" }}>4</span>
							<span style={{ color: "#ffffff" }}>Fun</span>
						</strong>
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
