import React from "react";
import { TextInput, View, Image } from "react-native";
import { ButtonText, Container, Login, PressableLogin, Title, InnerText, ViewSenha, ViewCadastro } from "./styles";


const Test = () => {
  return (
    <Container>
        <Logo />
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
  );
};

export default Test;

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