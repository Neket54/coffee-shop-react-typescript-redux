import React from "react"

import logoSvg from "../../assets/img/white-logo.svg"

import styles from "./Header.module.scss"

export const Header = () => {
	return (
		<div className="container">
			<div className={styles.Header}>
				<img src={logoSvg} alt="logo header" />
				<ul>
					<li>
						<a href="/">Coffee house</a>
					</li>
					<li>
						<a href="/our-coffee">Our coffee</a>
					</li>
					<li>
						<a href="/for-your-pleasure">For your pleasure</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
