import React from "react"

import logoPng from "../../assets/img/best-card-card-logo.png"

import styles from "./Best.module.scss"

export const Best: React.FC = () => {
	return (
		<div className={styles.Best}>
			<div className="container">
				<div className={styles.BestTitle}>Our best</div>
				<div className={styles.BestItems}>
					<div className={styles.BestCard}>
						<img src={logoPng} alt="best card img" />
						<div className={styles.BestCardTitle}>Solimo Coffee Beans 2 kg</div>
						<div className={styles.BestCardPrice}>10.73$</div>
					</div>
					<div className={styles.BestCard}>
						<img src={logoPng} alt="best card img" />
						<div className={styles.BestCardTitle}>Solimo Coffee Beans 2 kg</div>
						<div className={styles.BestCardPrice}>10.73$</div>
					</div>
					<div className={styles.BestCard}>
						<img src={logoPng} alt="best card img" />
						<div className={styles.BestCardTitle}>Solimo Coffee Beans 2 kg</div>
						<div className={styles.BestCardPrice}>10.73$</div>
					</div>
				</div>
			</div>
		</div>
	)
}
