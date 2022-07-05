import React, { useState } from "react";
import { CheckBox } from "react-native";

import { Container, CheckBoxContainer, Label, IconLabel} from "./styles";


const CheckBoxButton = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <Container >
      <CheckBoxContainer>
        <CheckBox styles={{alignSelf:"center", marginBotton:20}}
          value={isSelected}
          onValueChange={setSelection}
        //   style={styles.checkbox}
        />
        <Label>Usuário: ativo ou inativo...</Label>
       </CheckBoxContainer>
      <IconLabel>Você decide: {isSelected ? "🥳 ativo" : "👻 inativo"}</IconLabel>
    </Container>
  );
};

export default CheckBoxButton;