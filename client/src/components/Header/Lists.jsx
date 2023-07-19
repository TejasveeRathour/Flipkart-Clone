import CustomButtons from "./CustomButtons";
import { List, ListItem, Box } from "@mui/material";

const Lists = () => {
        <Box style={{ width: 200 }}>
            <List>
                <ListItem buttons>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
}

export default Lists;