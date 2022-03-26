import * as React from 'react'
import axios from 'axios'
import Post from '../components/Post'
import AvatarCustom from '../components/AvatarCustom';
import Friends from './Friends';

function Posts() {
    const [users, setUsers] = React.useState([]);
    const [photos, setPhotos] = React.useState([]);

    React.useEffect(async () => {
        await Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/users/"),
            axios.get("https://jsonplaceholder.typicode.com/photos")
        ])
        .then(response => {
            console.log(response[0].data);
            setUsers(response[0].data);
            setPhotos(response[1].data)
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div>   
        <Friends users={users}/>
            {users.map(user => (
                <div key={user.id}>
                    <Post
                        link={user.website}
                        avatar={<AvatarCustom name={user.username} />}
                        title=""
                        date="Data chyba tutaj"
                        image=""
                        description="Yes first photo of my cat. It is buety. "
                    />
                </div>
            ))}
        </div>
    );
}

export default Posts;
