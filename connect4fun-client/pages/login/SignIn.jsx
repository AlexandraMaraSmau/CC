import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
	Box,
	Button,
	Container,
	Link,
	Typography,
	InputAdornment,
	IconButton,
	TextField,
	Paper,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "../styles/LogIn.module.css";

export default function SingIn() {
	const router = useRouter();

	const [email, setEmail] = React.useState("");
	const [emailError, setEmailError] = React.useState(false);
	const [password, setPassword] = React.useState("");
	const [passwordError, setPasswordError] = React.useState(false);
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleClickForgotPassword = () => {
		router.push("/forgot-password");
	};

	const handleSingUp = () => {
		router.push("/sing-up");
	};

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
		setEmailError(false);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
		setPasswordError(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setEmailError(false);
		setPasswordError(false);

		if (!password.length) {
			setPasswordError(true);
		}

		if (!email.length) {
			setEmailError(true);
			return;
		}

		if (!/^[^\s]+@[^\s]+\.[^\s]+$/.test(email)) {
			setEmailError(true);
		}
	};

	return (
		<Container>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "90vh",
				}}
			>
				<Paper className={styles.login_card} elevation={3}>
					<Typography
						className={styles.login_component}
						variant="h4"
						component="h1"
						align="center"
						sx={{ fontWeight: "bold" }}
					>
						LogIn
					</Typography>

					<form onSubmit={handleSubmit}>
						<TextField
							className={styles.login_component}
							label="Email"
							variant="outlined"
							onChange={handleChangeEmail}
							value={email}
							error={emailError}
							helperText={
								emailError ? "Please enter a valid email address." : ""
							}
							fullWidth
						/>
						<TextField
							className={styles.login_component}
							type={showPassword ? "text" : "password"}
							label="Password"
							variant="outlined"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											edge="end"
										>
											{showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
							}}
							onChange={handleChangePassword}
							value={password}
							error={passwordError}
							helperText={passwordError ? "Please enter a password." : ""}
							fullWidth
						/>
						<Typography className={styles.login_component} align="center">
							<Link
								component="button"
								underline="none"
								onClick={handleClickForgotPassword}
								sx={{ align: "center" }}
							>
								Forgot password?
							</Link>
						</Typography>
						<Button
							type="submit"
							className={styles.login_component}
							variant="contained"
							sx={{ textTransform: "none", fontSize: "medium" }}
							fullWidth
						>
							LogIn
						</Button>
						<Typography className={styles.login_component} align="center">
							Don&rsquo;t have an account?{" "}
							<Link component="button" underline="none" onClick={handleSingUp}>
								{" "}
								SingUp{" "}
							</Link>
						</Typography>
					</form>
				</Paper>
			</Box>
		</Container>
	);
}
