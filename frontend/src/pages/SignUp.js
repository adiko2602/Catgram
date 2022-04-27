import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Grid, Typography } from '@mui/material'
import ButtonCustom from '../components/ButtonCustom'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

document.body.style.backgroundImage = "url(https://www.superiorwallpapers.com/cats/a-sweet-and-serious-cat-with-collar_2560x1440.jpg)";
document.body.style.backgroundSize = "cover";

export default function SignUp() {
    const history = useHistory();
  
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
  
    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';
    /*
    const handleSignUp = async (event) => {
      event.preventDefault();
  
      const usernameExists = await doesUsernameExist(username);
      
      if (!usernameExists) {
        try {
          const createdUserResult = await firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password);
  
          // authentication
          // -> emailAddress & password & username (displayName)
          await createdUserResult.user.updateProfile({
            displayName: username
          });
  
           firebase user collection (create a document)
          await firebase
            .firestore()
            .collection('users')
            .add({
              userId: createdUserResult.user.uid,
              username: username.toLowerCase(),
              fullName,
              emailAddress: emailAddress.toLowerCase(),
              following: ['2'],
              followers: [],
              dateCreated: Date.now()
            });*/
  
          //history.push("/"); #commented for now, it was moving to dashboard
        /*} catch (error) {
          setFullName('');
          setEmailAddress('');
          setPassword('');
          setError(error.message);
        }
      } else {
        setUsername('');
        setError('That username is already taken, please try another.');
      }
    };
  
    useEffect(() => {
      document.title = 'Sign Up - Catagram';
    }, []);
  */
    
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
            <img src="https://i.imgur.com/ZTcHjwn.png" alt="Catagram" className="mt-2 w-4/12 mb-4" /> 
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

            <input
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            <input
              aria-label="Enter your full name"
              type="text"
              placeholder="Full name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
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
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold
            ${isInvalid && 'opacity-50'}`}
            >
              Sign Up
            </button>

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
