import axios from "axios";
import authHeader from "./auth-header";
import authService from "./auth-service";

const apiUrl = "https://localhost:7045";

class userService {
    login() {
        const user = authService.getCurrentUser();
        const userId = user.id;
        return axios.get(apiUrl + "/Profile/" + userId).then(response => {
            if(response.data.name)
                localStorage.setItem("profile", JSON.stringify(response.data));
                
            return response.data;
        }
        );
    }

    async register(name, lastname, description) {
        const user = authService.getCurrentUser();
        const userid = user.id;
        return await axios.post(apiUrl + "/Profile", {
            userid,
            name,
            lastname,
            description
        })
    }

    logout() {
        localStorage.removeItem("profile");
    }

    getCurrentProfile() {
        return JSON.parse(localStorage.getItem("profile"));
    }
}

export default new userService();