import React from "react"

import { Home, Header, Footer } from "../"

import styles from "./App.module.scss"

export const App: React.FC = () => {
	return (
		<div className={styles.App}>
			<Header />
			<Home />
			<Footer />
		</div>
	)
}
