import { useState } from "react";
import { ICheckBox } from "./CheckBox.interface";

// импорт стилей
import styles from "./CheckBox.module.scss";
import cn from "classnames";

const CheckBox = ({ colorType, handleFunc, text, itemsCount }: ICheckBox) => {
	const [active, isActive] = useState(false);

	const handleActive = () => {
		isActive((prev) => !prev);
		handleFunc();
	};

	return (
		<div
			className={cn(styles.checkBox, {
				[styles.active]: active === true,
				[styles.red]: colorType === "red",
				[styles.yellow]: colorType === "yellow",
				[styles.green]: colorType === "green",
			})}
			onClick={handleActive}
		>
			{text}
			{itemsCount ? <span className={styles.count}>{itemsCount}</span> : null}
		</div>
	);
};

export default CheckBox;
