import React from "react";
// Импорты функций тестирования
import { describe, test, expect, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
// Импорт интерфейсов для типизации компонентов
import { IFilterBtn } from "../../../src/types/filterBtn.types";
// Импорт компонентов для теста
import Filters from "../../../src/components/Filters/Filters";

describe("Filters test", () => {
	test("should render", () => {
		const { getByTestId } = render(
			<Filters filtersData={[]} handleSortChange={() => ""} sortOrder={[]} toggleFilter={() => ""} />,
		);

		const filtersBlock = getByTestId("filtersBlock");

		expect(filtersBlock).toBeDefined();
	});
	test("should with filtersData", () => {
		const filtersData: IFilterBtn[] = [
			{ type: "pizza", text: "pizza", color: "green", itemsCount: 2 },
			{ type: "pizza1", text: "pizza2", color: "green", itemsCount: 2 },
		];
		const { getAllByTestId } = render(
			<Filters
				filtersData={filtersData}
				handleSortChange={() => ""}
				sortOrder={[]}
				toggleFilter={() => ""}
			/>,
		);

		const filtersBlock = getAllByTestId("checkBox");

		expect(filtersBlock.length).toBe(2);
	});
	test("should called toggleFilter func", () => {
		const filtersData: IFilterBtn[] = [
			{ type: "pizza", text: "pizza", color: "green", itemsCount: 2 },
			{ type: "pizza1", text: "pizza2", color: "green", itemsCount: 2 },
		];
		const toggleFilterMock = vi.fn();
		const { getAllByTestId } = render(
			<Filters
				filtersData={filtersData}
				handleSortChange={() => ""}
				sortOrder={[]}
				toggleFilter={toggleFilterMock}
			/>,
		);

		const filtersBlock = getAllByTestId("checkBox");

		fireEvent.click(filtersBlock[0]);
		expect(toggleFilterMock).toBeCalledTimes(1);
		fireEvent.click(filtersBlock[1]);
		expect(toggleFilterMock).toBeCalledTimes(2);
	});
	test("should render initial value select", () => {
		const sortOrder = [{ value: "test", label: "test" }];
		const { getByText } = render(
			<Filters
				filtersData={[]}
				handleSortChange={() => ""}
				sortOrder={sortOrder[0]}
				toggleFilter={() => ""}
			/>,
		);

		const slectText = getByText("test");

		expect(slectText.textContent).toBe(sortOrder[0].label);
	});
});
