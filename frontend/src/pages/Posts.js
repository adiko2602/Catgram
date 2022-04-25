import * as React from 'react'
import Post from '../components/Post'
import Timeline from '../components/Timeline';
import Friends from './Friends';
import axios from 'axios'
import { useState, useEffect } from "react";

function Posts() {
    const [posts, getPosts] = useState([]);

    const apiPost = 'https://localhost:7045/api/Post'
  
    const getAllPosts = async () => {
      await axios.get(apiPost)
      .then((response) => {
        let dataRes = response.data;
        console.log(dataRes)
        getPosts(dataRes);
      })
      .catch(error => console.error('Error'));
    }
  
    useEffect(() => {
      getAllPosts();
    }, []);

    return (
        <div>   
        {//<Friends posts={posts}/>
}
            {posts.map(post => (
                <div key={post.id}>
                    <Post
                        link={post.link}
                        avatar={<Timeline name={post.title} />}
                        title={post.title}
                        image={post.picture.replace('E:/Studia/SEMESTR 4/catgram/', 'http://127.0.0.1:8080/')}
                        description={post.description}
                    />
                    
                    { console.log(post.picture) }
                </div>
            ))}
        </div>
    );
}

export default Posts;