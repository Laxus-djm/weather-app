import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  color: #fff;
  transition: all 0.1s ease-in;
  &:hover {
    background: rgba(0, 0, 0, 0.4);
    transition: all 0.1s ease-in;
  }
  @media screen and (max-width: 800px) {
    margin-top: 30px;
  }
`;
export const Wrapper = styled.div`
  padding: 3px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  @media screen and (max-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
  }
`;

export const DayName = styled.h3`
  margin-bottom: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Icon = styled.img`
  width: 40px;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Temperature = styled.p`
  margin-right: 10px;
`;

export const Svg = (Icon) => {
  let X = styled(Icon)`
    width: 20px;
    margin-right: 10px;
    height: 30px;
    width: 40px;
    `;
  return <X />;
};

export const Time = styled.p``;
