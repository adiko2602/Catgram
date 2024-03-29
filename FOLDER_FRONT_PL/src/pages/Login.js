import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Grid, Typography } from '@mui/material'
import ButtonCustom from '../components/ButtonCustom'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import axios from 'axios';
import authService from '../services/auth-service';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import userService from '../services/user-service';



document.body.style.backgroundImage = "url(https://www.superiorwallpapers.com/cats/a-sweet-and-serious-cat-with-collar_2560x1440.jpg)";
document.body.style.backgroundSize = "cover";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true
    });

    var userId;

    authService.login(
      this.state.username,
      this.state.password).then(
        () => {
          window.location.reload();
        },
        error => {
          const resMessage = (
            error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            loading: false,
            message: resMessage
          });
        }
      )



  }

  render() {
    return (
      <><><AppBar position="sticky" elevation={5}>
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
            <ButtonCustom link="/login" name="Zaloguj si�" icon={<LoginOutlinedIcon />} />
            <ButtonCustom link="/sign-up" name="Zarejestruj si�" icon={<LockOpenOutlinedIcon />} />
            <ButtonCustom link="/contact-us" name="Kontakt" icon={<ContactMailOutlinedIcon />} />
          </Grid>
        </Toolbar>
      </AppBar>

      </><div className="container flex mx-auto items-center h-screen">
          <div className="flex w-full">
          </div>
          <div className="flex flex-col w-3/5">
            <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
              <h1 className="flex justify-center w-full">
                <img src="https://i.imgur.com/ZTcHjwn.png" alt="Catagram" className="mt-2 w-4/12 mb-2" />
              </h1>

              {this.state.message && (
                <p className="mb-4 text-xs text-red-primary">
                  {this.state.message}
                </p>
              )}
              <form onSubmit={this.handleLogin}>

                <input
                  aria-label="Wpisz swoj� nazw� u�ytkownika"
                  type="text"
                  placeholder="Login"
                  className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                  onChange={this.onChangeUsername}
                  value={this.state.username}
                />


                <input
                  aria-label="Wprowad� has�o"
                  type="password"
                  placeholder="Password"
                  className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                  onChange={this.onChangePassword}
                  value={this.state.password}
                />


                <button
                  type="submit"
                  disabled={this.state.loading}
                  className={`bg-blue-medium text-white w-full rounded h-8 font-bold`}
                >
                  Zaloguj si�
                  {this.state.loading && ("...")}
                </button>

              </form>
            </div>
            <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
              <p className="text-sm">
                Nie masz konta?{` `}
                <a href="/sign-up" className="font-bold text-blue-medium">
                  Zarejestruj si�
                </a>
              </p>
            </div>
          </div>
        </div></>
    );
  }
}
