import { IFilterBtn } from "../../types/filterBtn.types";

export interface IFilters {
	filtersData: IFilterBtn[];
	toggleFilter: (filter: string) => void;
	sortOrder: any;
	handleSortChange: (...values: any) => void;
}
