import { AppBar, Toolbar, Grid, Typography, IconButton } from '@mui/material'
import ButtonCustom from '../components/ButtonCustom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import authService from '../services/auth-service';
import userService from '../services/user-service';
import React, { Component } from 'react';



export default class Header extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        authService.logout();
        userService.logout();
        window.location.reload();
    }

    render() {

        return (
            <AppBar position="sticky" elevation={5}>
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                    >
                        <a href="/">
                            <input type="image" src="https://i.imgur.com/ZTcHjwn.png" style={{ height: '38px', justifyContent: 'flex-start', marginLeft: '0px', direction: 'row', marginTop: '5px' }} />
                        </a>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                    >
                        <ButtonCustom link="/" name="Home" icon={<HomeOutlinedIcon />} />
                        <ButtonCustom link="/add" name="Add" icon={<AddBoxOutlinedIcon />} />
                        <ButtonCustom link="/profile" name="Profile" icon={<AccountBoxOutlinedIcon />} />
                        <button onClick={this.handleLogout} >Logout</button>
                        <IconButton aria-label="Logout" onClick={this.handleLogout}>
                            <LogoutOutlinedIcon />
                        </IconButton>
                        {/*<ButtonCustom name="Logout" icon={<LogoutOutlinedIcon />} onClick={this.handleLogout} />}*/}
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

