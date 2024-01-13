import React, { useState } from "react";
import {
	Box,
	Button,
	Container,
	Typography,
	Paper,
	TextField,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useRouter } from "next/router";

export default function Chat() {
	const router = useRouter();

	const [currentConversation, setCurrentConversation] = useState(null);
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState("");
	const currentUserId = 1;

	const users = [
		{ id: 1, name: "ana123" },
		{ id: 2, name: "george_turcu" },
		{ id: 3, name: "cosmin2000" },
	];

	const groups = [
		{ id: 1, name: "Footbal" },
		{ id: 2, name: "Gaming" },
	];

	const handleConversationClick = (conv) => {
		setCurrentConversation(conv);
		const chatMessages = [
			{
				id: 1,
				text: "Hello!",
				sender: conv.id === "group" ? "group" : conv.id,
			},
			{ id: 2, text: "Hi there!", sender: 1 },
		];
		setMessages(chatMessages);
	};

	const handleSendMessage = () => {
		if (newMessage.trim() === "") return;

		const newMessageObj = {
			id: messages.length + 1,
			text: newMessage,
			sender: 1,
		};

		setMessages([...messages, newMessageObj]);
		setNewMessage("");
	};

	return (
		<Container disableGutters maxWidth={false}>
			<Box
				style={{
					height: "90vh",
					width: "100%",
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Paper
					style={{
						height: "90%",
						width: "90%",
						display: "flex",
						margin: "40px 10px 40px 10px",
					}}
					elevation={3}
				>
					<div style={{ flex: "1" }}>
						<div
							style={{
								height: "100%",
								overflowY: "auto",
								padding: "0px 10px 10px 10px",
							}}
						>
							<Typography
								variant="h3"
								color="#606ccc"
								style={{
									padding: "10px 30px 10px 30px",
								}}
							>
								<strong>Chats</strong>
							</Typography>
							<List style={{}}>
								{users.map((chat) => (
									<ListItem disablePadding>
										<ListItemButton
											key={chat.id}
											onClick={() => handleConversationClick(chat)}
											style={{
												border: "1px solid #ccc",
												padding: "10px 30px 10px 30px",
											}}
										>
											<ListItemIcon>
												<PersonOutlineIcon />
											</ListItemIcon>
											<ListItemText primary={chat.name} />
										</ListItemButton>
									</ListItem>
								))}
							</List>
						</div>
					</div>
					<div
						style={{
							flex: 3,
							padding: "10px 10px 10px 10px",
							height: "100%",
							overflowY: "auto",
						}}
					>
						{currentConversation ? (
							<>
								<Typography
									variant="h3"
									color="#fcad03"
									align="center"
									style={{
										padding: "10px 30px 10px 30px",
									}}
								>
									{currentConversation.name}
								</Typography>

								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "10px",
										border: "1px solid #ccc",
										paddingBottom: "10px",
										height: "70%",
										borderRadius: "5px",
									}}
								>
									{messages.map((message) => (
										<div
											key={message.id}
											style={{
												display: "flex",
												flexDirection: "column",
												paddingLeft: "10px",
												paddingRight: "10px",
												alignItems:
													message.sender === 1 ? "flex-end" : "flex-start",
											}}
										>
											<div style={{ textAlign: "center", marginBottom: "5px" }}>
												{message.sender === currentUserId
													? "You"
													: currentConversation.name}
											</div>
											<Paper
												elevation={3}
												style={{
													minWidth: "40%",
													padding: "10px",
													maxWidth: "70%",
													backgroundColor:
														message.sender === currentUserId
															? "#fcad03"
															: "#606ccc",
													color: "white",
												}}
											>
												{message.text}
											</Paper>
										</div>
									))}
								</div>

								<div
									style={{
										display: "flex",
										alignItems: "center",
										marginTop: "10px",
										backgroundColor: "#f0f0f0",
										padding: "10px",
										borderRadius: "5px",
									}}
								>
									<TextField
										type="text"
										value={newMessage}
										onChange={(e) => setNewMessage(e.target.value)}
										placeholder="Type your message..."
										style={{ flex: 4, marginRight: "10px" }}
									/>
									<Button
										variant="contained"
										color="primary"
										style={{ flex: 1 }}
										onClick={handleSendMessage}
									>
										Send
									</Button>
								</div>
							</>
						) : (
							<p>Select a user to start chatting.</p>
						)}
					</div>
				</Paper>
			</Box>
		</Container>
	);
}
