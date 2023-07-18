import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import React from 'react';
import {ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material';

const LeftContainer = styled(Box)`
    min-width: 40%;
    padding: 40px 0 0 80px;
`

const Image = styled('img')({
    padding: '15px',
    width:'95%'
});

const StyledButton = styled(Button)`
    width: 48%;
    height: 50px;
    border-radius: 2px;
`

const ActionItem = ({product}) => {
  return (
    <LeftContainer>
        <Box style={{padding: '15px 20px',border: '1px solid #f0f0f0'}}>
            <Image src={product.detailUrl} alt='product'/>
        </Box>
        <StyledButton variant='contained' style={{marginRight: 10, background: '#ff9f00'}}><Flash />Buy Now</StyledButton>
        <StyledButton variant='contained' style={{background: '#fb541b'}}><Cart />Add to Cart</StyledButton>
        
    </LeftContainer>
  )
}

export default ActionItem;
