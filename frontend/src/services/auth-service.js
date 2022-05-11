import axios from "axios";
import userService from "./user-service";

const apiUrl = "https://localhost:7045";

class authService {
    login(username, password) {
        const email = "";
        return axios.post(apiUrl + "/User/auth/login", {
            username,
            password,
            email
        }).then(response => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        }
        );
    }

    logout() {
        localStorage.removeItem("user");
    }

    async register(username, password, email) {
        return await axios.post(apiUrl + "/User/auth/register", {
            username,
            password,
            email
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