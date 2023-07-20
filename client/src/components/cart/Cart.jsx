import { Grid, Typography, Box, styled, Button } from "@mui/material";
import { UseSelector, useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";




const Container = styled(Grid)(({theme})=>({
    padding: '30px 135px',
    [theme.breakpoints.down('md')]:{
        padding: '10px 15px 0 15px'
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background-color: white;
`

const ButtonWrapper = styled(Box)`
    padding: 16px 22px;
    background: white;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: #f0f0f0;
`

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    width: 250px;
    height: 51px;
    border-radius: 2px;
    color: white;
    font-weight: 600;
`

const LeftComponent =styled(Grid)(({theme})=>({
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
        marginBottom: 15
    }
}));

const Cart = () =>{

    const {cartItems} = useSelector(state => state.cart);
    
    return(
        <>
            {
                cartItems.length ?
                    <Container container>
                        <LeftComponent item lg ={9} md ={9} sm ={12} xs ={12}>
                            <Header>
                                <Typography>My Cart({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItem item = {item} />
                                ))
                            }
                            <ButtonWrapper>
                                <StyledButton>PLACE ORDER</StyledButton>
                            </ButtonWrapper>
                        </LeftComponent>
                        <Grid item lg={3} md ={3} sm ={12} xs ={12}>
                            <TotalView cartItems={cartItems}/>
                        </Grid>
                    </Container>
                :
                    <EmptyCart/>

            }
        </>
    )
}

export default Cart;