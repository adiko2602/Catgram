import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Grid, Typography } from '@mui/material'
import ButtonCustom from '../components/ButtonCustom'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import axios from 'axios';


document.body.style.backgroundImage = "url(https://www.superiorwallpapers.com/cats/a-sweet-and-serious-cat-with-collar_2560x1440.jpg)";
document.body.style.backgroundSize = "cover";

export default function Login() {

    const apiLogin = 'https://localhost:7045/User/auth/login'
    const history = useHistory();
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userLogged, setUserLogged] = useState();
    const [userToken, setUserToken] = useState('');
    const [userId, setUserId] = useState();
    const [userUsername, setUserUsername] = useState('');
  
    const [error, setError] = useState('');
    const isInvalid = username === '' || password === '';
  
    const handleLogin = async (event) => {
      event.preventDefault();

      await axios.post(apiLogin, {
        "id": 0,
        "username": username,
        "password": password
      })

      .then(function (response) {
        const res = response.data;
        if(!res.id || !res.token || !res.username) {
          setError("Error with response from server.");
          return;
        }
        setUserId(res.id);
        setUserToken(res.token);
        setUserUsername(res.username);

        console.log(userUsername);
        console.log(userToken);
        console.log(userId);

        
        setUserLogged(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
      return (
        <><><AppBar position="sticky" elevation={5}>
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                >
                    <a href="/start">
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
            <img src="https://i.imgur.com/ZTcHjwn.png" alt="Catagram" className="mt-2 w-4/12 mb-2" />
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          {userLogged ? (
            <>
            <div>Logged success</div>
            </>
          ) : (
          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold`}
            >
              Login
            </button>
          </form>
          )}
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm">
            Don't have an account?{` `}
            <a href="/sign-up" className="font-bold text-blue-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div></>
    );
}