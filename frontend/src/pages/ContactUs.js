import * as React from 'react'
import { AppBar, Toolbar, Grid, Typography } from '@mui/material'
import ButtonCustom from '../components/ButtonCustom'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

document.body.style.backgroundImage = "url(https://www.superiorwallpapers.com/cats/a-sweet-and-serious-cat-with-collar_2560x1440.jpg)";
document.body.style.backgroundSize = "cover";

export default function ContactUs() {
  
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
        <div className="flex justify-center items-center flex-col w-full p-6 rounded text-white">
        <p className="text-medium">
            Contact Page 
        </p>
        <p className="text-sub-sub">
            If you would like to get in touch with us, press the button below to open the contact form.
        </p>
        </div>
        <div className="flex flex-col items-center p-4 mb-8 rounded">
            <button
              type="button"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold`}
            >
              Contact us
            </button>
        </div>
      </div>
    </div></>
    );
}
