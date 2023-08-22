import { useState } from "react";
import { IData } from "../types/data.types";

export function useSort(initialSortOrder: { value: string; label: string }) {
	const [sortOrder, setSortOrder] = useState(initialSortOrder);

	const parseDate = (dateString: string): Date => {
		const parts = dateString.split(".");
		if (parts.length !== 3) {
			throw new Error(`Invalid date format: ${dateString}`);
		}
		const day = parseInt(parts[0], 10);
		const month = parseInt(parts[1], 10) - 1;
		const year = parseInt(parts[2], 10);
		return new Date(year, month, day);
	};

	const sortData = (data: IData[]): IData[] => {
		return [...data].sort((a, b) => {
			const dateA = parseDate(a.date);
			const dateB = parseDate(b.date);
			if (sortOrder.value == "сначала новые") {
				return dateA.getTime() - dateB.getTime();
			} else {
				return dateB.getTime() - dateA.getTime();
			}
		});
	};

	return { sortOrder, setSortOrder, sortData };
}
