import { Typography, Box, Table, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { LocalOffer as Badge } from '@mui/icons-material';
import styled from '@emotion/styled';


const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p{
        font-size: 14px;
        margin-top: 10px;
    }
`;

const StyledBadge = styled(Badge)`
    margin-right: 8px;
    margin-left: 10px;
    color: #00cc00;
    font-size: 15px;

`
const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td{
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`


const ProductDetail = ({ product }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 3 Reviews
                <Box component="span"><img src={fassured} style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount}</Box>
            </Typography>
            <Typography>Available offers</Typography>
            <SmallText>
                <Typography><StyledBadge />Get extra 20% off upto ₹50 on 1 item(s) T&C</Typography>
                <Typography><StyledBadge />Get extra 13% off (price inclusive of discount) T&C</Typography>
                <Typography><StyledBadge />Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100* Know More</Typography>
                <Typography><StyledBadge />Buy 2 items save 5%: Buy 3 or more save 10% T&C</Typography>
                <Typography><StyledBadge />5% Cashback on Flipkart Axis Bank Card</Typography>
                <Typography><StyledBadge></StyledBadge>No COst EMI on Bajaj Flinserv EMI Card on cart value above ₹2999 T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                </TableBody>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                </TableBody>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{ color: '#2874fe' }}>SuperComNet</Box>
                            <Typography>GST invoice Available</Typography>
                            <Typography>14 Days Return Policy</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} alt='superCoin Logo' />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}> Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;