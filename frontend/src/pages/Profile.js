import React, { Component } from 'react'
import Post from '../components/Post'
import Timeline from '../components/Timeline';
import Friends from './Friends';
import axios from 'axios'
import Header from './Header';
import AvatarCustom from '../components/AvatarCustom';
import { useState, useEffect } from "react";
import { ImageList, ImageListItem, ImageListItemBar, Grid, CardHeader, Card, CardContent, Typography } from '@mui/material';
import authService from '../services/auth-service';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            currentUser: authService.getCurrentUser(),
            itemData: [
                {
                    src: 'google.pl',
                    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                    title: 'Breakfast',
                    author: '@bkristastucchio',
                },
                {
                    src: 'google.pl',
                    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                    title: 'Burger',
                    author: '@rollelflex_graphy726',
                },
                {
                    src: 'google.pl',
                    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                    title: 'Camera',
                    author: '@helloimnik',
                },
                {
                    src: 'google.pl',
                    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                    title: 'Coffee',
                    author: '@nolanissac',
                },
                {
                    src: 'google.pl',
                    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
                    title: 'Hats',
                    author: '@hjrc33',
                },
                {
                    src: 'google.pl',
                    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
                    title: 'Honey',
                    author: '@arwinneil',
                },
                {
                    src: 'google.pl',
                    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
                    title: 'Basketball',
                    author: '@tjdragotta',
                },
                {
                    src: 'google.pl',
                    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                    title: 'Fern',
                    author: '@katie_wasserman',
                },
                {
                    src: 'google.pl',
                    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                    title: 'Mushrooms',
                    author: '@silverdalex',
                },
                {
                    src: 'google.pl',
                    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
                    title: 'Tomato basil',
                    author: '@shelleypauls',
                },
                {
                    src: 'google.pl',
                    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
                    title: 'Sea star',
                    author: '@peterlaster',
                },
                {
                    src: 'google.pl',
                    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                    title: 'Bike',
                    author: '@southside_customs',
                },
            ]
        };
    }

    handleLogout(e) {
        e.preventDefault();
        authService.logout()
        window.location.reload();
    }

    render() {
        return (
            <>
                <Header />
                <button
                    onClick={this.handleLogout}
                    type="submit"
                    className={`bg-blue-medium text-white w-full rounded h-8 font-bold`}
                >
                    logout
                </button>
                <Card style={{ width: '650px', marginTop: '20px' }} elevation={5}>
                    <CardHeader
                        avatar={<AvatarCustom name={this.state.currentUser.username} />}
                        title="Pobierz nazwe profilu"
                        subheader="Krótki opis profilu który jest w chuj długi zeby zobaczyc jak to bedzie wygladac gdy bedzie az tak cholernie dlugi"
                    />
                    <CardContent>
                        <ImageList cols={3} gap={8}>
                            {/* {this.state.itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <a href={item.src}>
                                    <img
                                    src={item.img}
                                    srcSet={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                </a>
                            </ImageListItem>
                        ))} */}
                        </ImageList>
                    </CardContent>
                </Card>
            </>
        );
    }
}