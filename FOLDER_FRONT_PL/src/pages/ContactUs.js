import React, { Component } from 'react'
import { AppBar, Toolbar, Grid, Typography } from '@mui/material'
import ButtonCustom from '../components/ButtonCustom'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import emailjs from "emailjs-com";
import { SettingsInputAntennaTwoTone } from '@mui/icons-material';

document.body.style.backgroundImage = "url(https://www.superiorwallpapers.com/cats/a-sweet-and-serious-cat-with-collar_2560x1440.jpg)";
document.body.style.backgroundSize = "cover";

export default class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.sendEmail = this.sendEmail.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            send: false
        };
    }

    sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_j0crfxs', 'template_t4q1uil', e.target, 'z8MkSEH-sIePCOtQn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            send: true
        });
    }

    render() {
        if (!this.state.send) {
            return (
                <>
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
                                <ButtonCustom link="/login" name="Zaloguj siê" icon={<LoginOutlinedIcon />} />
                                <ButtonCustom link="/sign-up" name="Zarejestruj siê" icon={<LockOpenOutlinedIcon />} />
                                <ButtonCustom link="/contact-us" name="Kontakt" icon={<ContactMailOutlinedIcon />} />
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <div className="container flex mx-auto items-center h-screen">
                        <div className="flex w-full">
                        </div>
                        <div className="flex flex-col w-3/5">
                            <div className="flex justify-center items-center flex-col w-full p-6 rounded text-white">
                                <p className="text-medium">
                                    Strona kontaktowa
                                </p>
                                <p className="text-sub-sub">
                                    Jeœli chcia³byœ skontakowaæ siê z nami, naciœnij przycik poni¿ej, aby otworzyæ formularz kontaktowy.
                                </p>
                            </div>
                            <div className="flex flex-col items-center p-2 mb-8 rounded">
                                <button
                                    type="button"
                                    className={`bg-blue-medium text-white w-full rounded h-8 font-bold`}
                                    onClick={this.handleClick}
                                >
                                    Kontakt
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
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
                                <ButtonCustom link="/login" name="Zaloguj siê" icon={<LoginOutlinedIcon />} />
                                <ButtonCustom link="/sign-up" name="Zarejestruj siê" icon={<LockOpenOutlinedIcon />} />
                                <ButtonCustom link="/contact-us" name="Kontakt" icon={<ContactMailOutlinedIcon />} />
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <div className="container flex mx-auto items-center h-screen">
                        <div className="flex w-full">
                        </div>
                        <div className="flex flex-col w-3/5">
                            <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
                                <h1 className="flex justify-center w-full">
                                    <img src="https://i.imgur.com/ZTcHjwn.png" alt="Catagram" className="mt-2 w-4/12 mb-4" />
                                </h1>

                                <form
                                    onSubmit={this.sendEmail}
                                >
                                    <input
                                        aria-label="Wpisz swoj¹ nazwê u¿ytkownika"
                                        type="text"
                                        placeholder="Full name"
                                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                                        name="name"
                                    />


                                    <input
                                        aria-label="Wpisz swoje imiê i nazwisko"
                                        type="text"
                                        placeholder="Email address"
                                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                                        name="email"
                                    />
                                    <input
                                        aria-label="WprowadŸ temat wiadomoœci e-mail"
                                        type="text"
                                        placeholder="Subject"
                                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                                        name="subject"
                                    />

                                    <textarea
                                        aria-label="WprowadŸ treœæ wiadomoœci"
                                        type="text"
                                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                                        id="" cols="30" rows="8"
                                        placeholder="Message"
                                        name="message"
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className={`bg-blue-medium text-white w-full rounded h-8 font-bold`}
                                    >
                                        Wyœlij formularz
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
}