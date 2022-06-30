import { InputContainer, WrapperInputEye } from "./styles";
import { Feather } from "@expo/vector-icons";
import colors from "../../Theme/colors";

const InputEye = ({ placeholder }) => {
	return (
		<WrapperInputEye>
			<InputContainer placeholder={placeholder} />
			<Feather
				name="eye"
				size={18}
				color={colors.secondary}
				style={{
					position: "absolute",
					marginStart: 160,
					alignSelf: "center",
				}}
			/>
		</WrapperInputEye>
	);
};

export default InputEye;
