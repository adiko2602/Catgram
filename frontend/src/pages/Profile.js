import React, { Component } from 'react'
import PostProfile from '../components/PostProfile'
import Timeline from '../components/Timeline';
import Friends from './Friends';
import axios from 'axios'
import Header from './Header';
import AvatarCustom from '../components/AvatarCustom';
import { useState, useEffect } from "react";
import { ImageList, ImageListItem, ImageListItemBar, Grid, CardHeader, Card, CardContent, Typography } from '@mui/material';
import authService from '../services/auth-service';
import ButtonCustom from '../components/ButtonCustom'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { AppBar, Toolbar, IconButton } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

import userService from '../services/user-service';
import postService from '../services/post-service';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            currentUser: authService.getCurrentUser(),
            currentProfile: userService.getCurrentProfile(),
            currentPosts: []
        };
    }

    componentDidMount() {
        postService.getCurrentPosts().then(
            response => {
                this.setState({
                    currentPosts: response.data
                });
            },
            error => {
                const resMessage = (
                    error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                this.setState({
                    message: resMessage
                });
            }
        );
    }

    handleLogout(e) {
        e.preventDefault();
        authService.logout();
        userService.logout();
        window.location.reload();
    }

    render() {
        return (
            <>
                <Header />
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={3}>
                        <Card style={{ width: '650px', marginTop: '20px' }} elevation={5}>
                            <CardHeader
                                avatar={<AvatarCustom name={this.state.currentUser.username} />}
                                title={this.state.currentProfile.name}
                                subheader={this.state.currentProfile.description}
                            />
                        </Card>
                                {this.state.currentPosts.map(post => (
                                    <div key={post.id}>
                                        <PostProfile
                                            postId={post.id}
                                            title={post.title}
                                            picture={post.linkPicture.replace('E:/Studia/SEMESTR 4/catgram/', 'http://127.0.0.1:8080/')}
                                            description={post.description}
                                        />
                                    </div>
                                ))}
                    </Grid>
                </Grid>
            </>
        );
    }
}