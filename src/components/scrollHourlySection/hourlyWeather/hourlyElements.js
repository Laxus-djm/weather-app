import styled from "styled-components";

export const Container = styled.div`
  width: 130px;
  margin-top: 55px;
  @media screen and (max-width: 800px) {
    /* height: 200px; */
  }
`;
export const Wrapper = styled.div`
  padding: 3px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Icon = styled.img`
  width: 40px;
`;

export const Item = styled.p`
  text-align: center;
  color: #fff;
  font-weight: bold;
`;
