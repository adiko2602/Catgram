import axios from "axios";
import authService from "./auth-service";

const apiUrl = "https://localhost:7045";

class postService {
    createPost(title, description, file, fileName) {
        const user = authService.getCurrentUser();
        const userId = user.id;
        const formData = new FormData();
        
        formData.append("FormFile", file);
        formData.append("UserId", userId);
        formData.append("FileName", fileName);
        formData.append("Title", title);
        formData.append("Description", description);

        return axios.post(apiUrl + "/Post", formData).then(
            response => {
                return response.data;
            }
        );
    }

    getPosts() {
        const user = authService.getCurrentUser();
        const userId = user.id;

        return axios.get(apiUrl + "/Post");
    }

    delete(id) {
        return axios.delete(apiUrl + "/Post/" + id).then(
            response => {
                return response.data;
            }
        )
    }

    // logout() {
    //     localStorage.removeItem("user");
    // }

    // register(username, password) {
    //     return axios.post(apiUrl + "/User/auth/register", {
    //         username,
    //         password
    //     });
    // }
    
    // getCurrentUser() {
    //     return JSON.parse(localStorage.getItem("user"));
    // }

    // loggedIn() {
    //     if(localStorage.getItem("user") === null) {
    //         return false;
    //     }
    //     return true;
    // }
}

export default new postService();