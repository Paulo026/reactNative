import { InputContainer } from "./styles";

const Input = ({ placeholder, onChangeText }) => {
	return <InputContainer placeholder={placeholder} onChangeText={onChangeText} />;
};

export default Input;
