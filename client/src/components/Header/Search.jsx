import { InputBase, Box, styled, List, ListItem } from '@mui/material'
import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

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

const ListWrapper = styled(List)`
  position: absolute;
  background: white;
  color: black;
  margin-top: 36px;
`

const Search = () => {

  const [text, setText] = useState('');

  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])


  const getText = (text) => {
    setText(text);
  }


  return (
    <SearchContaint>
      <InputSearch
        placeholder='Search for products,brands and more'
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <Searchicon>
        <SearchIcon />
      </Searchicon>

      {
        text &&
        <ListWrapper>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem>
                <Link
                    to = {`/product/${product.id}`}
                    onClick={()=>setText('')}
                    style={{textDecoration: 'none',color: 'inherit'}}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }
        </ListWrapper>
      }
    </SearchContaint>
  )
}

export default Search;