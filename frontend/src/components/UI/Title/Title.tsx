import { ITitle } from "./Title.interface";

import styles from "./Title.module.scss";

const Title = ({ title, typeTitle }: ITitle) => {
	return (
		<>
			{typeTitle == "h1" ? (
				<h1 data-testid="titleH1" className={styles.title}>
					{title}
				</h1>
			) : (
				<h2 data-testid="titleH2" className={styles.title}>
					{title}
				</h2>
			)}
		</>
	);
};

export default Title;
