import React, { useState, Component } from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Grid, Typography } from '@mui/material'
import ButtonCustom from '../components/ButtonCustom'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import authService from '../services/auth-service';
import userService from '../services/user-service';

document.body.style.backgroundImage = "url(https://www.superiorwallpapers.com/cats/a-sweet-and-serious-cat-with-collar_2560x1440.jpg)";
document.body.style.backgroundSize = "cover";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.state = {
      username: "",
      password: "",
      email: "",
      name: "",
      lastname: "",
      description: "",
      successful: false,
      loading: false,
      message: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false,
      loading: true
    });

    authService.register(
      this.state.username,
      this.state.password,
      this.state.email).then(
        response => {
          console.log(response);
          this.setState({
            message: response.data.message,
            successful: true,
            loading: false
          });
          authService.login(
            this.state.username,
            this.state.password
          )
        },
        error => {
          console.log(error);
          const resMessage = (
            error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            successful: false,
            loading: false,
            message: resMessage
          });
        }
      );
  }

      handleProfile(e) {
        e.preventDefault();
        this.setState({
          message: "",
          successful: false,
          loading: true
        });

      userService.register(
        this.state.name,
        this.state.lastname,
        this.state.description).then(
          response => {
            console.log(response);
            this.setState({
              message: response.data.message,
              loading: false
            });
                userService.login().then(
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
                  });
                  window.location.reload();
          },
          error => {
            console.log(error);
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
        );
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
            <ButtonCustom link="/login" name="Login" icon={<LoginOutlinedIcon />} />
            <ButtonCustom link="/sign-up" name="Sign Up" icon={<LockOpenOutlinedIcon />} />
            <ButtonCustom link="/contact-us" name="Contact us" icon={<ContactMailOutlinedIcon />} />
          </Grid>
        </Toolbar>
      </AppBar>

      </><div className="container flex mx-auto items-center h-screen">
          <div className="flex w-full">
          </div>
          <div className="flex flex-col w-3/5">
            <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
              <h1 className="flex justify-center w-full">
                <img src="https://i.imgur.com/ZTcHjwn.png" alt="Catagram" className="mt-2 w-4/12 mb-4" />
              </h1>

              {this.state.successful && (
                <form
                  onSubmit={this.handleProfile}
                >

                  <input
                    aria-label="Enter your name"
                    type="text"
                    placeholder="Name"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                    onChange={this.onChangeName}
                    value={this.state.Name}
                  />

                  <input
                    aria-label="Enter your lastname"
                    type="text"
                    placeholder="Lastname"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                    onChange={this.onChangeLastname}
                    value={this.state.lastname}
                  />

                  <input
                    aria-label="Enter description of you"
                    type="text"
                    placeholder="Description"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                    onChange={this.onChangeDescription}
                    value={this.state.description}
                  />
                  <button
                    type="submit"
                    className={`bg-blue-medium text-white w-full rounded h-8 font-bold`}
                  >
                    Create Profile {this.state.loading && ("...")}
                  </button>
                </form>)}
              {!this.state.successful && <p className="mb-4 text-xs text-red-primary">{this.state.message}</p>}
              {!this.state.successful && (
                <form
                  onSubmit={this.handleRegister}
                >

                  <input
                    aria-label="Enter your username"
                    type="text"
                    placeholder="Username"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                    onChange={this.onChangeUsername}
                    value={this.state.username}
                    disabled={this.state.successful}
                  />

                  <input
                    aria-label="Enter your email"
                    type="text"
                    placeholder="Email"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                    onChange={this.onChangeEmail}
                    value={this.state.email}
                    disabled={this.state.successful}
                  />


                  {/* <input
                  aria-label="Enter your full name"
                  type="text"
                  placeholder="Full name"
                  className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                  onChange={this.onChangePassword}
                  value={fullName}
                />
                <input
                  aria-label="Enter your email address"
                  type="text"
                  placeholder="Email address"
                  className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                  onChange={({ target }) => setEmailAddress(target.value)}
                  value={emailAddress}
                /> */}


                  <input
                    aria-label="Enter your password"
                    type="password"
                    placeholder="Password"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                    onChange={this.onChangePassword}
                    value={this.state.password}
                    disabled={this.state.successful}
                  />
                  <button
                    disabled={this.state.loading || this.state.successful}
                    type="submit"
                    className={`bg-blue-medium text-white w-full rounded h-8 font-bold`}
                  >
                    Sign Up {this.state.loading && ("...")}
                  </button>
                </form>)}
            </div>
            <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
              <p className="text-sm">
                Have an account?{` `}
                <a href="/login" className="font-bold text-blue-medium">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div></>
    );
  }
}
