import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 1rem;
  background-color: #d77dba;
  padding: 1rem;
  border-radius: 5px 0;

  display: ${(props) => (props.showHeader ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  color: #222222;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  width: 9rem;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;
export const SaveButton = styled.button`
  width: 4rem;
  border: 0;
  background-color: transparent;
  color: #fff;
  font-weight: bold;
  border: 1.5px solid #ffff;
  border-radius: 4px;
  padding: 0.1rem 0.2rem;

  &:hover {
    background-color: #fff;
    color: #d77dba;
  }
`;

export const DeleteButton = styled.button`
  width: 4rem;
  border: 0;
  background-color: transparent;
  color: #fff;
  font-weight: bold;
  border: 1.5px solid #ffff;
  border-radius: 4px;
  padding: 0.1rem 0.2rem;

  &:hover {
    background-color: #fff;
    color: #d77dba;
  }
`;
