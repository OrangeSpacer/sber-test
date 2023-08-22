import { useState } from "react";

export function useFilter(initialFilters: string[]) {
	const [activeFilters, setActiveFilters] = useState<string[]>(initialFilters);

	const toggleFilter = (filter: string) => {
		if (activeFilters.includes(filter)) {
			setActiveFilters(activeFilters.filter((item) => item !== filter));
		} else {
			setActiveFilters([...activeFilters, filter]);
		}
	};

	return { activeFilters, toggleFilter };
}
