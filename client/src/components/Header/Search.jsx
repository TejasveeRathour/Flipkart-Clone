import { InputBase,Box,styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchContaint = styled(Box)`
    background: white;
    width: 38%;
    height: 36px;
    border-radius: 2px;
    margin-left: 10px;
    display:flex;
`;
const InputSearch = styled(InputBase)`
    padding-left: 20px;
    width: 100%
`;

const Searchicon = styled(Box)`
  color:#2874fe;
  padding: 5px;
  display: flex;
`

const Search = () => {
  return (
    <SearchContaint>
      <InputSearch
          placeholder='Search for products,brands and more'
      />
      <Searchicon>
        <SearchIcon/>
      </Searchicon>
    </SearchContaint>
  )
}

export default Search;