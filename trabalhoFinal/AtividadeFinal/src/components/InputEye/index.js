import { InputContainer, WrapperInputEye} from "./styles";
import { Ionicons } from '@expo/vector-icons';
import colors from "../../Theme/colors";
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';


const InputEye = ({ placeholder }) => {
	const [input, setInput] = useState('');
	const [hidePass, setHidePass] = useState(true);

	return (
		<WrapperInputEye>
			<InputContainer placeholder={placeholder} 
				value={input}
				onChangeText={ (texto) => setInput(texto) }
				secureTextEntry={hidePass}
			/>

			<TouchableOpacity onPress={() => setHidePass(!hidePass)}>
			<Ionicons
				name={hidePass ? 'eye' : 'eye-off'}
				size={18}
				color={colors.secondary}
				style={{
					position: "absolute",
					marginStart: 180,
					alignSelf: "center",
					marginStart: -30, // workAround
					marginTop: 5,
				}}
			/>	
			</TouchableOpacity>
		</WrapperInputEye>
	);
};

export default InputEye;
