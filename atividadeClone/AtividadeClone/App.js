import React from "react";
import { TextInput, View, Image } from "react-native";
import {
  ButtonText,
  Container,
  Login,
  Logo,
  PressableLogin,
  Title,
  InnerText,
  ViewSenha,
  ViewCadastro,
} from "../AtividadeClone/src/screens/login/styles";
import logo from "./assets/logo.png";
import { LinearGradient } from "expo-linear-gradient";


const Teste = () => {
  return (
    <Container colors={["#0ff", "white", "#0ff"]}>
      <Logo source={logo}/>
      <Login>
        <Title>
          LOGIN
        </Title>
        <View style={{ marginTop: 20 }}>
          <InnerText placeholder= "👀 usuário"  />
          <InnerText placeholder="🔑 senha"  />
          <ViewSenha>
          Esqueceu sua senha? clique aqui.
          </ViewSenha>
          <PressableLogin>
            <ButtonText>
              ACESSAR
            </ButtonText>
          </PressableLogin>
            <ViewCadastro>
          Não possui cadastro? Cadastre-se aqui.
          </ViewCadastro>
        </View>
      </Login>      
    </Container>
  )
};

export default Teste;