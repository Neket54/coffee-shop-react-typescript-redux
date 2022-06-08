import React from "react"

import footerDividerLogoSvg from "../../assets/img/about-divider-logo-svg.svg"
import logoSvg from "../../assets/img/black-logo.svg"

import styles from "./Footer.module.scss"

export const Footer: React.FC = () => {
	return (
		<div className="container">
			<div className={styles.Footer}>
				<div className={styles.FooterTop}>
					<img src={logoSvg} alt="logo footer" />
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
				<div className={styles.FooterDivider}>
					<div className={styles.FooterDividerLeft}></div>
					<img src={footerDividerLogoSvg} alt="divider logo svg" />
					<div className={styles.FooterDividerRight}></div>
				</div>
			</div>
		</div>
	)
}
