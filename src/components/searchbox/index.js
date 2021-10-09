import React from "react";
import {
  SearchBox,
  Input,
  SearchInput,
  Icon,
  SearchIcon,
  SearchResults,
  Container,
  Item,
} from "./searchboxElements";

function Search({
  placeholder,
  data,
  value,
  handleType,
  handleClick,
}) {
  return (
    <Container>
      <SearchBox>
        <SearchInput>
          <Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleType}
          />
          <SearchIcon>
            <Icon />
          </SearchIcon>
        </SearchInput>

        {value && (
          <SearchResults>
            {data.map((suggestion, index) => (
              <Item key={index} onClick={() => handleClick(suggestion)}>
                {suggestion.name}
              </Item>
            ))}
          </SearchResults>
        )}
      </SearchBox>
    </Container>
  );
}

export default Search;
