import styled from 'styled-components';

const Group = styled.div`
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 190px; /* Adjust as needed */
`;

const Input = styled.input`
  font-family: "Montserrat", sans-serif; /* Specify a fallback font */
  width: 11rem;
  height: 45px;
  margin-right: 2rem;
  padding-left: 2.5rem;
  box-shadow: 0 0 0 1.5px #706fd3, 0 0 25px -17px #000; /* Inner and outer shadows */
  border: 0;
  border-radius: 12px;
  background-color: none;
  outline: none;
  color: #bdbecb;
  transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: text;
  z-index: 0;

  &::placeholder {
    color: #bdbecb; /* Consistent placeholder color */
  }

  &:hover {
    box-shadow: 0 0 0 2.5px #2f303d, 0px 0px 25px -15px #000; /* Emphasize hover with stronger effect */
  }

  &:active {
    transform: scale(0.95); /* Subtle active state */
  }

  &:focus {
    box-shadow: 0 0 0 2.5px #22b8e5; /* Distinctive focus state with blue color */
  }
`;

const SearchIcon = styled.svg`
  position: absolute;
  left: 1rem;
  fill: #bdbecb;
  width: 1rem;
  height: 1rem;
  pointer-events: none; /* Prevent accidental clicks */
  z-index: 1;
`;

const StyledSearchBar = () => (
  <Group>
    <SearchIcon viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
    </SearchIcon>
    <Input id="query" type="search" placeholder="Search..." name="searchbar" />
  </Group>
);

export default StyledSearchBar;
