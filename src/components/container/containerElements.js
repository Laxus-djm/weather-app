import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const BlurDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.3) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
    border-radius: 20px;
  }
`;

export const Content = styled.div`
  background-image: url(${require("../../images/bg2.png").default});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 80%;
  height: 650px;
  min-width: 320px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  box-shadow: 0px 10px 50px -20px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
  @media screen and (max-width: 800px) {
    height: auto;
    position: static;
    transform: translate(0, 0);
    width: 100%;
  }
`;
