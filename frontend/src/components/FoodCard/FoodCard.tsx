import { IFoodCart } from "./FoodCard.interface";

import styles from "./FoodCard.module.scss";

const FoodCard = ({ date, imgPath, title, type }: IFoodCart) => {
	return (
		<div className={styles.block}>
			<div className={styles.blockInfo}>
				<div className={styles.type}>{type}</div>
				<div className={styles.date}>{date}</div>
			</div>
			<div className={styles.blockInfo}>
				<div className={styles.blockImg}>
					<img src={imgPath} alt="food-card" className={styles.img} />
				</div>
				<div className={styles.title}>{title}</div>
			</div>
		</div>
	);
};

export default FoodCard;
