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
  async function deleteFile(id) {
    await api.delete(`/files/${id}`);
    toast.success(`${fileName} was successfully deleted.`);
  }

  async function saveFileContentChanges(id) {
    await api.put(`/files/${id}`);
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
