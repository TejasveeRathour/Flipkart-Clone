import { Box, Button, Typography, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import LoginDialog from '../login/LoginDialog';
import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';


const Wrapper = styled(Box)`
    display:flex;
    margin: 0 3% 0 auto;
    & > button,& > p, & >div{
        margin-right:40px;
        font-size: 16px;
        align-items: center;
    }
`
const LoginB = styled(Button)`
    color:#2874fe;
    background-color:white;
    font-weight:600;
    height: 32px;
    padding: 5px 40px;
    text-transform:none;
    border-radius:2px;
    box-shadow:none;
`

const CustomButtons = () => {

    const [open, setOpen] = useState(false);

    const { account,setAccount } = useContext(DataContext);

    const openDialog = () => {
        setOpen(true);
    }
    return (
        <Wrapper>
            {
                account ? <Profile account = {account} setAccount={setAccount}/> :
                    <LoginB variant='contained' onClick={() => openDialog()}>Login</LoginB>
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>

            <Box style={{ display: 'flex' }}>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Box>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons;