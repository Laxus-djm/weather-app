import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  margin: 50px 0;
`;

export const SearchBox = styled.div`
  margin: 0 auto;
  width: 50%;
  min-width: 300px;
`;

export const SearchInput = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Input = styled.input`
  background-color: #fff;
  border: 0;
  border-radius: 2px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 18px;
  padding: 25px;
  height: 60px;
  width: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 0;
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  height: 60px;
  width: 50px;
  background-color: white;
  display: grid;
  place-items: center;
  border-top-right-radius: 15px;
`;

export const Icon = styled(AiOutlineSearch)`
  font-size: 35px;
`;

export const SearchResults = styled.div`
  width: 100%;
  max-height: 200px;
  background-color: #191e22;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.p`
  height: 40px;
  cursor: pointer;
  padding: 10px 0 0 10px;
  color: #fff;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #000;
    transition: all 0.1s ease-in-out;
  }
`;
