import React from "react";
import Header from "../components/SimpleHeader";

export default function Layout({ children }) {
	return (
		<>
			<Header></Header>
			<main>{children}</main>
		</>
	);
}
