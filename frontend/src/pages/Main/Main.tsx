// импорт из сторонних библиотек
import axios from "axios";
import { useEffect, useState } from "react";
import { timeData } from "./filterData/timeData";

// импорты компонентов
import Title from "../../components/UI/Title/Title";
import FoodCard from "../../components/FoodCard/FoodCard";
import Filters from "../../components/Filters/Filters";

// Импорты интерфейсов(для типизации)
import { IData } from "../../types/data.types";
import { IFilterBtn } from "../../types/filterBtn.types";

// Импорты кастомных хуков
import { useFilter, useSort } from "../../hooks/index";

// импорты стилей
import styles from "./Main.module.scss";

const Main = () => {
	const [data, setData] = useState<IData[]>([]);
	const { activeFilters, toggleFilter } = useFilter([]);
	const { setSortOrder, sortData, sortOrder } = useSort(timeData[0]);
	const [dataTimeFiltred, setDataTimeFiltred] = useState<IData[]>([]);
	const filtersData: IFilterBtn[] = [
		{
			color: "red",
			text: "суши",
			type: "суши",
			itemsCount: data.filter((item) => item.type === "суши").length,
		},
		{
			color: "yellow",
			text: "пицца",
			type: "пицца",
			itemsCount: data.filter((item) => item.type === "пицца").length,
		},
		{
			color: "green",
			text: "бургеры",
			type: "бургеры",
			itemsCount: data.filter((item) => item.type === "бургеры").length,
		},
	];

	useEffect(() => {
		(async () => {
			const { data } = await axios.get("http://localhost:5001/data");
			if (data) {
				setData(data);
			}
		})();
	}, []);

	useEffect(() => {
		setDataTimeFiltred(sortData(data));
	}, [setSortOrder, sortOrder, data]);

	const filteredProducts =
		activeFilters.length === 0
			? dataTimeFiltred
			: dataTimeFiltred.filter((product: IData) => activeFilters.includes(product.type));

	return (
		<div className={styles.main}>
			<div className={styles.titleBlock}>
				<Title title="мое приложение" typeTitle="h1" />
			</div>
			<div className={styles.filters}>
				<Filters
					filtersData={filtersData}
					sortOrder={sortOrder}
					handleSortChange={setSortOrder}
					toggleFilter={toggleFilter}
				/>
			</div>
			<div className={styles.itemsBlock}>
				{filteredProducts.length
					? filteredProducts.map((item) => (
							<FoodCard
								date={item.date}
								imgPath={item.imgPath}
								title={item.title}
								type={item.type}
								key={item.id}
							/>
					  ))
					: null}
			</div>
		</div>
	);
};

export default Main;
