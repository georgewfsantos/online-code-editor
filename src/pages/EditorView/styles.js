import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

export const SideBar = styled.div`
  padding: 1.6rem;
`;

export const FileView = styled.div`
  background-color: #000;
  padding: 0.5rem;
`;

export const FileContentView = styled.div`
  height: 100vh;
  padding: 0.5 rem;
  background-color: #fff;
  color: #000;
  border-radius: 0 3px;

  textarea {
    width: 100%;
    height: 100%;
  }
`;
