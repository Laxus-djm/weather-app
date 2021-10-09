import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;
export const Square = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transition: all ease-in-out 0.3s;
  background-color: ${({ active }) =>
    active ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.2)"};
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
  transform: ${({ active }) => (active ? "scale(1.5)" : "")}; ;
`;

export const ArrowBtn = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  align-self: center;
  transform: translateY(20px);
  margin: 0 5px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  outline: none;
  font-size: 1.5rem;
  color: ${({ disabled }) =>
    disabled ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,1)"};
  transition: all ease-in 0.1s;
  &:hover {
    transform: translateY(20px)
      ${({ disabled }) => (disabled ? "" : "scale(2)")};
    transition: all ease-in 0.2s;
  }
`;
