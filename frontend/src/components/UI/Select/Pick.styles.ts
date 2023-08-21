// Импорт из сторонних библиотек
import { CSSObjectWithLabel } from "react-select";

const selectStyles = {
	control: (baseStyles: CSSObjectWithLabel) => ({
		...baseStyles,
		width: "160px",
		border: "none",
		fontSize: "16px",
		fontWeight: "400",
		lineHeight: "20px",
	}),
	indicatorSeparator: () => ({
		display: "none",
	}),
	menu: (baseStyles: CSSObjectWithLabel) => ({
		...baseStyles,
		width: "200px",
		backgroundColor: "white",
		borderRadius: "8px",
		border: "1px solid #E3E3E3",
		marginTop: "8px",
		boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
	}),
};

export default selectStyles;
