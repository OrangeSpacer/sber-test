import React from "react";
// Импорты функций тестирования
import { describe, test, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Импорт компонентов для теста
import CheckBox from "../../../../src/components/UI/CheckBox/CheckBox";

describe("CheckBox test", () => {
	test("should render", () => {
		const { getByTestId } = render(<CheckBox colorType="green" handleFunc={() => ""} text="test" />);

		const checkBox = getByTestId("checkBox");

		expect(checkBox).toBeDefined();
	});
	test("should call func", () => {
		const mockOnClick = vi.fn();

		const { getByTestId } = render(
			<CheckBox colorType="green" handleFunc={mockOnClick} text="test" />,
		);

		const checkBox = getByTestId("checkBox");

		fireEvent.click(checkBox);

		expect(mockOnClick).toBeCalledTimes(1);
	});
	test("should seen item count", () => {
		const { getByTestId } = render(
			<CheckBox colorType="green" handleFunc={() => ""} text="test" itemsCount={2} />,
		);

		const itemsCount = getByTestId("itemsCount");

		expect(itemsCount.textContent).toBe("2");
	});
	test("should have choise text", () => {
		const { getByTestId } = render(<CheckBox colorType="green" handleFunc={() => ""} text="test" />);

		const checkBox = getByTestId("checkBox");

		expect(checkBox.textContent).toBe("test");
	});
});
