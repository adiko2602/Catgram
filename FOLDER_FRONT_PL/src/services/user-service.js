import axios from "axios";
import authHeader from "./auth-header";
import authService from "./auth-service";

const apiUrl = "https://localhost:7045";

class userService {
    login(userId) {
        axios.get(apiUrl + "/Profile/" + userId).then(response => {
            if (response.data.name) {
                localStorage.setItem("profile", JSON.stringify(response.data));
            }
        }
        );
    }

    logout() {
        localStorage.removeItem("profile");
    }

    getCurrentProfile() {
        return JSON.parse(localStorage.getItem("profile"));
    }
}

export default new userService();