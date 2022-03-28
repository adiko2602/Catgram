import * as React from 'react'
import { AppBar, Toolbar, Grid, Typography } from '@mui/material'
import ButtonCustom from '../components/ButtonCustom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

function Header() {
    return (
        <AppBar position="sticky" elevation={5}>
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                >
                    <Typography variant="h5">Catgram</Typography>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                >
                    <ButtonCustom link="/" name="Home" icon={<HomeOutlinedIcon />} />
                    <ButtonCustom link="/add" name="Add" icon={<AddBoxOutlinedIcon />} />
                    <ButtonCustom link="/profile" name="Profile" icon={<AccountBoxOutlinedIcon />} />
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
//