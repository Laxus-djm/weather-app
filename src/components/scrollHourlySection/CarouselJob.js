import { Flex, Square, ArrowBtn } from "./styles";
import { consts } from "react-elastic-carousel";

export const renderPag = ({ pages, activePage, onClick }) => {
  return (
    <Flex>
      {pages.map((page) => {
        const isActivePage = activePage === page;
        return (
          <Square
            key={page}
            onClick={() => onClick(page)}
            active={isActivePage}
          />
        );
      })}
    </Flex>
  );
};

export const myArrow = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? "＜" : "＞";
  return (
    <ArrowBtn onClick={onClick} disabled={isEdge}>
      {pointer}
    </ArrowBtn>
  );
};
