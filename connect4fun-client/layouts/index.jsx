import React from "react";
import Header from "../components/Header";

export default function Layout({ children }) {
	return (
		<>
			<Header></Header>
			<main>{children}</main>
		</>
	);
}
