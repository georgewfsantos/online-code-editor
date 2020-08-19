import React from "react";

import {
  Container,
  ButtonContainer,
  SaveButton,
  DeleteButton,
} from "./styles.js";

const Header = ({ fileName, fileContent, showHeader }) => {
  let content = fileContent;

  return (
    <Container showHeader={showHeader}>
      {fileName}
      <ButtonContainer>
        <SaveButton onClick={() => console.log(content)}>Save</SaveButton>
        <DeleteButton onClick={() => console.log(fileName)}>
          Delete
        </DeleteButton>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
