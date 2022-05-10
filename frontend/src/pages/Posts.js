import * as React from 'react'
import Post from '../components/Post'
import Timeline from '../components/Timeline';
import Friends from './Friends';
import axios from 'axios'
import Header from './Header';
import { useState, useEffect, Component } from "react";
import postService from '../services/post-service';

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
    console.log(this.state.posts);
    return (
      <div>
        <Header />
        {this.state.posts.map(post => (
          <div className="flex justify-center items-center flex-col p-4" key={post.id}>
            <Post
              postId={post.id}
              avatar={<Timeline name={post.title} />}
              title={post.title}
              picture={post.linkPicture.replace('E:/Studia/SEMESTR 4/catgram/', 'http://127.0.0.1:8080/')}
              description={post.description}
            />
          </div>
        ))}
      </div>
    );
  }
}