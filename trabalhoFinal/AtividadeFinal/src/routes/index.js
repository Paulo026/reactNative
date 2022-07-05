import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Login";
import AboutUs from "../screens/AboutUs";
import PasswordCreate from "../Screens/PasswordCreate";
import PasswordRecovery from "../Screens/PasswordRecovery";
import UserSignUp from "../Screens/UserSignUp";
import UserSignUpSuccess from "../screens/UserSignUpSuccess";
import CategoryChange from "../screens/CategoryChange";
import CategoryCreate from "../screens/CategoryCreate";
import Category from "../screens/Category";
import Product from "../screens/Product";
import ProductCreate from "../screens/ProductCreate";
import ProductChange from "../screens/ProductChange";
import PasswordSuccess from "../screens/PasswordSuccess";
import User from "../screens/User";
import UserChange from "../screens/UserChange";

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
				name="Categorias"
				component={Category}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Usuários"
				component={User}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Alterar Usuário"
				component={UserChange}
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
				component={UserSignUpSuccess}
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
				name="Senha alterada com sucesso"
				component={PasswordSuccess}
				options={{
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name="Sobre Nós"
				component={AboutUs}
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
			<Stack.Screen
				name="Alterar Categoria"
				component={CategoryChange}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Cadastro de Categoria"
				component={CategoryCreate}
				options={{
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name="Cadastro de Produto"
				component={ProductCreate}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Alterar Produto"
				component={ProductChange}
				options={{
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name="Produtos"
				component={Product}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default Routes;
