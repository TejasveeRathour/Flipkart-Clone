
import { AppBar, Toolbar, styled, Typography, Box} from '@mui/material';
import { yellow } from '@mui/material/colors';
import Search from './Search';
import CustomButtons from './CustomButtons';


const StyledHeader = styled(AppBar)`
    background: #2874fe;
    height: 54px;
`
const Comp = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: Italic;
`
const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`

const Header=()=>{

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    return(
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
                <Comp>
                    <img src={logoURL} alt='logo' style={{width:75}}/>
                    <Box style={{display: 'flex'}}>
                        <SubHeading>Explore 
                            <Box component="span" style={{color:'yellow'}}> Plus</Box>
                        </SubHeading>
                        <img src={subURL} alt='sub-logo' style={{width:10, height:10, marginLeft:4}}/>
                    </Box>
                </Comp>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    );
}

export default Header;