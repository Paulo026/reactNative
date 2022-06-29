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


const Login = () => {
  return (
    <Container >
       <LinearGradient
                colors={['#0FF', 'transparent']}
                style={{
                    position: "absolute", 
                    left: 0,
                    right: 0,
                    top: 0,
                    height: "30%",
                }} />
      <Logo source={logo}/>
      <Acesso>
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
      </Acesso>
      <LinearGradient
                colors={['transparent', '#0FF']}
                style={{
                    position: "absolute", 
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "30%",
                }} />
    </Container>
  )
};

export default Login;


// Verificar nome Login pois vai da error;

// const temaPadrao= StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     Background:        '#282a36',   
// Current Line:       '#44475a',    
// Foreground:       ' #f8f8f2',    
// Comment:        '#6272a4',   
// Cyan:        '#8be9fd',   
// Green:        '#50fa7b',    
// Orange:        '#ffb86c',    
// Pink:      ' #ff79c6',    
// Purple:       ' #bd93f9,'    
// Red:       '#ff5555',    
// Yellow:       ' #f1fa8c',    

//   }
// });
