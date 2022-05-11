import axios from "axios";
import userService from "./user-service";

const apiUrl = "https://localhost:7045";

class authService {
    login(username, password) {
        return axios.post(apiUrl + "/User/auth/login", {
            username,
            password
        }).then(response => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
                userService.login(response.data.id);
            }
            return response.data;
        }
        );
    }

    logout() {
        localStorage.removeItem("user");
    }

    async register(username, password) {
        return await axios.post(apiUrl + "/User/auth/register", {
            username,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }

    loggedIn() {
        if (localStorage.getItem("user") === null) {
            return false;
        }
        return true;
    }
}

export default new authService();