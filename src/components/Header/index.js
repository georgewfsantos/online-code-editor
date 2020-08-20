import React from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

import {
  Container,
  ButtonContainer,
  SaveButton,
  DeleteButton,
} from "./styles.js";

const Header = ({ fileName, fileId, showHeader }) => {
  async function deleteFile() {
    await api.delete(`/files/${fileId}`);
    toast.success(`${fileName} was successfully deleted.`);
  }

  async function saveFileContentChanges() {
    await api.put(`/files/${fileId}`);
    toast.success(`Changes to ${fileName} were succesfully saved.`);
  }

  return (
    <Container showHeader={showHeader}>
      {fileName}
      <ButtonContainer>
        <SaveButton onClick={() => saveFileContentChanges(fileId)}>
          Save
        </SaveButton>
        <DeleteButton onClick={() => deleteFile(fileId)}>Delete</DeleteButton>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
