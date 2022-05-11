import * as React from 'react'
import { AppBar, Toolbar, Grid, Typography } from '@mui/material'
import ButtonCustom from '../components/ButtonCustom'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

document.body.style.backgroundImage = "url(https://www.superiorwallpapers.com/cats/a-sweet-and-serious-cat-with-collar_2560x1440.jpg)";
document.body.style.backgroundSize = "cover";

export default function Start() {
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
                    <ButtonCustom link="/login" name="Zaloguj siê" icon={<LoginOutlinedIcon />} />
                    <ButtonCustom link="/sign-up" name="Zarejestruj siê" icon={<LockOpenOutlinedIcon />} />
                    <ButtonCustom link="/contact-us" name="Kontakt" icon={<ContactMailOutlinedIcon />} />
                </Grid>
            </Toolbar>
        </AppBar>

        </>
            <div className="container flex mx-auto items-center h-screen">
                <div className="flex w-full">
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex justify-center items-center flex-col w-full p-4 rounded text-white">
                        <p className="text-main">
                            Witaj na Catagramie!
                        </p>
                        <p className="text-sub">
                            Szybko rozwijaj¹ca siê spo³ecznoœæ kreatywnych w³aœcicieli kochaj¹cych koty.
                        </p>
                    </div>
                </div>
            </div>


        </>
    );
}
//<ButtonCustom link="/login" name="Catagram"/>


/*</><div className="flex justify-center items-center flex-col p-4 text-white">
<p className="text-main">
    Welcome to Catagram! 
</p>
<p className="text-sub">
    Fast-Growing community of creative cat loving owners.
</p>
</div></>*/
