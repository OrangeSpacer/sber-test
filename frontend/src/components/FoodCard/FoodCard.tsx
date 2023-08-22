import { IFoodCart } from "./FoodCard.interface";

import styles from "./FoodCard.module.scss";

const FoodCard = ({ date, imgPath, title, type }: IFoodCart) => {
	return (
		<div className={styles.block} data-testid="foodCard">
			<div className={styles.blockInfo}>
				<div className={styles.type} data-testid="type">
					{type}
				</div>
				<div className={styles.date} data-testid="date">
					{date}
				</div>
			</div>
			<div className={styles.blockInfo}>
				<div className={styles.blockImg}>
					<img src={imgPath} alt="food-card" data-testid="img" className={styles.img} />
				</div>
				<div data-testid="title" className={styles.title}>
					{title}
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
