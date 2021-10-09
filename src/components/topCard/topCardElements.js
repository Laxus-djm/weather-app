import styled from "styled-components";

export const Container = styled.div`
  height: 40%;
  width: 100%;
  @media screen and (max-width: 800px) {
    height: auto;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-top: 10px;
  width: 100%;
  @media screen and (max-width: 800px) {
    padding: 50px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: translateY(-20px);
  padding-left: 25px;
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: #fff;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
  @media screen and (max-width: 400px) {
    font-size: medium;
  }
`;

export const WeatherStatus = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
  @media screen and (max-width: 800px) {
    padding-left: 50px;
    align-items: center;
    justify-content: flex-start;
  }
  @media screen and (max-width: 400px) {
    font-size: medium;
  }
`;
export const SvgSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  @media screen and (max-width: 800px) {
    flex: 0;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 400px) {
    font-size: medium;
  }
`;

export const Icon = styled.img`
  width: 100px;
  margin: 0 auto 10px;
  @media screen and (max-width: 800px) {
    width: 60px;
  }
`;

export const Temperature = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 50px;
`;

export const Degres = styled.p`
  font-size: 3.5rem;
  margin-left: 5px;
  color: #fff;
  @media screen and (max-width: 800px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 400px) {
    font-size: large;
  }
`;

export const Mode = styled.span`
  display: flex;
  margin-left: 10px;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    margin-bottom: 40px;
    margin-left: 0;
  }
`;
export const ModeItem = styled.p`
  margin-right: 2px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
  margin: 0 10px;
  cursor: pointer;
  opacity: ${({ selected }) => (selected ? "100%" : "50%")};
  border-bottom: ${({ selected }) => (selected ? "2px solid #fff" : "")};
  @media screen and (max-width: 400px) {
    font-size: medium;
  }
`;

export const Divider = styled.span`
  width: 2px;
  height: 15px;
  background: rgba(255, 255, 255, 0.2);
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
  transform: translateY(-10px);
  @media screen and (max-width: 800px) {
    padding-right: 0;
  }
`;
export const H5 = styled.h5`
  color: #fff;
  font-size: 1.2rem;
  margin-top: 30px;
  text-align: start;
  @media screen and (max-width: 800px) {
    text-align: center;
    font-size: 1rem;
  }
`;

export const H5Container = styled.div``;
