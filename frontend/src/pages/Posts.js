import * as React from 'react'
import Post from '../components/Post'
import Timeline from '../components/Timeline';
import Friends from './Friends';
import axios from 'axios'
import Header from './Header';
import { useState, useEffect, Component } from "react";
import postService from '../services/post-service';
import { Grid } from '@mui/material'

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      message: ""
    };
  }

  componentDidMount() {
    postService.getPosts().then(
      response => {
        
    console.warn(response.data)
        this.setState({
          posts: response.data
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
            {this.state.posts.map(post => (
              <div key={post.id}>
                <Post
                  postId={post.id}
                  avatar={<Timeline name={post.userName} />}
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