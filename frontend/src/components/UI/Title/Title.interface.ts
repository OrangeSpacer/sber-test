import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITitle
	extends DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement> {
	title: string;
	typeTitle: "h1" | "h2";
}
