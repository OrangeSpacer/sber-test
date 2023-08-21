export interface DataType {
	readonly value: string;
	readonly label: string;
}

export interface IPick {
	data: any[];
	value: any;
	handleFunc: (...values: any) => void;
}
