import React from "react";
// Импорты функций тестирования
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
// Импорт компонентов для теста
import FoodCard from "../../../src/components/FoodCard/FoodCard";

describe("FoodCard test", () => {
	test("should render", () => {
		const { getByTestId } = render(
			<FoodCard date="13.13.2003" imgPath="" title="test" type="pizza" />,
		);

		const foodCard = getByTestId("foodCard");

		expect(foodCard).toBeDefined();
	});
	test("should with date", () => {
		const date = "18.03.2004";
		const { getByTestId } = render(<FoodCard date={date} imgPath="" title="test" type="pizza" />);

		const dateElem = getByTestId("date");

		expect(dateElem.textContent).toBe(date);
	});
	test("should with title", () => {
		const title = "test";
		const { getByTestId } = render(<FoodCard date="" imgPath="" title={title} type="pizza" />);

		const titleElem = getByTestId("title");

		expect(titleElem.textContent).toBe(title);
	});
	test("should with type", () => {
		const type = "pizza";
		const { getByTestId } = render(<FoodCard date="" imgPath="" title="" type={type} />);

		const typeElem = getByTestId("type");

		expect(typeElem.textContent).toBe(type);
	});
	test("should with imgPath", () => {
		const imgPath = "test/teest1.jpg";
		const { getByTestId } = render(<FoodCard date="" imgPath={imgPath} title="" type="" />);

		const imgElem = getByTestId("img");

		expect(imgElem.getAttribute("src")).toBe(imgPath);
	});
});
