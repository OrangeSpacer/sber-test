// импорт сторонних библиотек
import Select from "react-select";
import Item from "./Item/Item";

// импорт локальных файлов
import { IPick } from "./Pick.interface";

// Стили для Select
import selectStyles from "./Pick.styles";

const Pick = ({ data, handleFunc, value }: IPick) => {
	console.log(value);
	return (
		<Select
			value={value}
			onChange={handleFunc}
			options={data}
			components={{ Option: Item }}
			styles={selectStyles}
		/>
	);
};

export default Pick;
