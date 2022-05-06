import axios from "axios";

const apiUrl = "https://localhost:7045";

class authService {
    login(username, password) {
        return axios.post(apiUrl + "/User/auth/login", {
                username,
                password
            }).then(response => {
                if(response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data))
                }
                return response.data;
                }
            );
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, password) {
        return axios.post(apiUrl + "/User/auth/register", {
            username,
            password
        });
    }
    
    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new authService();