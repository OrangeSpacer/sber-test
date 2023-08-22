// импорт из сторонних библиотек
import { timeData } from "../../pages/Main/filterData/timeData";

// Импорты интерфейсов(для типизации)

// Импорты компонентов
import CheckBox from "../UI/CheckBox/CheckBox";
import Pick from "../UI/Select/Pick";
import { IFilters } from "./Filters.interface";

// Импорты стилий
import styles from "./Filters.module.scss";

const Filters = ({ handleSortChange, sortOrder, toggleFilter, filtersData }: IFilters) => {
	return (
		<div className={styles.block}>
			<div className={styles.blockBtns}>
				{filtersData.map((filter) => (
					<CheckBox
						key={filter.type}
						text={filter.text}
						colorType={filter.color}
						itemsCount={filter.itemsCount}
						handleFunc={() => toggleFilter(filter.type)}
					/>
				))}
			</div>
			<div className={styles.blockSelect}>
				<Pick data={timeData} value={sortOrder} handleFunc={handleSortChange} />
			</div>
		</div>
	);
};

export default Filters;
