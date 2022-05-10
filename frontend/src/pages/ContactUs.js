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
                                <ButtonCustom link="/login" name="Login" icon={<LoginOutlinedIcon />} />
                                <ButtonCustom link="/sign-up" name="Sign Up" icon={<LockOpenOutlinedIcon />} />
                                <ButtonCustom link="/contact-us" name="Contact us" icon={<ContactMailOutlinedIcon />} />
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <div className="container flex mx-auto items-center h-screen">
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
                            <div className="flex flex-col items-center p-2 mb-8 rounded">
                                <button
                                    type="button"
                                    className={`bg-blue-medium text-white w-full rounded h-8 font-bold`}
                                    onClick={this.handleClick}
                                >
                                    Contact us
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
                                        aria-label="Enter your username"
                                        type="text"
                                        placeholder="Full name"
                                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                                        name="name"
                                    />


                                    <input
                                        aria-label="Enter your full name"
                                        type="text"
                                        placeholder="Email address"
                                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                                        name="email"
                                    />
                                    <input
                                        aria-label="Enter subject of the email"
                                        type="text"
                                        placeholder="Subject"
                                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                                        name="subject"
                                    />

                                    <textarea
                                        aria-label="Enter the message"
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
                                        Send the form
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