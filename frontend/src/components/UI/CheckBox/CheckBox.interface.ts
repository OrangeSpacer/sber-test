import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICheckBox
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string;
	colorType: "red" | "yellow" | "green";
	itemsCount?: number;
	handleFunc: () => void;
}
