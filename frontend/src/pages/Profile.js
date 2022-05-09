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
                            <CardContent>
                                <ImageList cols={3} gap={8}>
                                    {this.state.currentPosts.map((post) => (
                                        <ImageListItem key={post.id}>
                                            <a href={post.linkPicture}>
                                                <img
                                                    src={post.linkPicture.replace('E:/Studia/SEMESTR 4/catgram/', 'http://127.0.0.1:8080/')}

                                                    alt={post.title}
                                                    loading="lazy"
                                                />
                                            </a>
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </>
        );
    }
}