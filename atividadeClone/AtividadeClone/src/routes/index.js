import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Login";
import Marketplace from "../Screens/Marketplace";
import PasswordCreate from "../Screens/PasswordCreate";
import PasswordRecovery from "../Screens/PasswordRecovery";
import UserSignUp from "../Screens/UserSignUp";
import UserSignUpSucess from "../Screens/UserSignUpSucess";

const Stack = createNativeStackNavigator();

const Routes = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Cadastro de Usuário"
				component={UserSignUp}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Cadastro de Usuário feito com sucesso"
				component={UserSignUpSucess}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Criar Senha"
				component={PasswordCreate}
				options={{
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name="Marketplace"
				component={Marketplace}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Recuperar Senha"
				component={PasswordRecovery}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default Routes;
