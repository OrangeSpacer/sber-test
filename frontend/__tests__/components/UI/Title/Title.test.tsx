import React from "react";
// Импорты функций тестирования
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
// Импорт компонентов для теста
import Title from "../../../../src/components/UI/Title/Title";

describe("Title test", () => {
	test("should render with h1", () => {
		const { getByTestId, queryByTestId } = render(<Title title="test" typeTitle="h1" />);

		const titleH2 = queryByTestId("titleH2");
		const titleH1 = getByTestId("titleH1");

		expect(titleH2).toBeNull();

		expect(titleH1).toBeDefined();
	});
	test("should render with h2", () => {
		const { getByTestId, queryByTestId } = render(<Title title="test" typeTitle="h2" />);

		const titleH1 = queryByTestId("titleH1");
		const titleH2 = getByTestId("titleH2");

		expect(titleH1).toBeNull();

		expect(titleH2).toBeDefined();
	});
	test("should render with text", () => {
		const text = "test";
		const { getByTestId } = render(<Title title={text} typeTitle="h2" />);

		const titleH2 = getByTestId("titleH2");

		expect(titleH2.textContent).toBe(text);
	});
});
