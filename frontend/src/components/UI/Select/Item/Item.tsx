import { IItem } from "./Item.interface";

// Импорт стилий
import styles from "./Item.module.scss";

const Item = ({ innerProps, isSelected, label }: IItem) => {
	return (
		<div {...innerProps} className={styles.item}>
			{label}
			{isSelected && <img src="/img/checkmark.svg" />}
		</div>
	);
};

export default Item;
