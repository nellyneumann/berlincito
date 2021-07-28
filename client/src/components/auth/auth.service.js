import axios from "axios";
const backend_url = "http://localhost:5005";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: backend_url,
      withCredentials: true,
    });
  }

  signup = (username, password) => {
    return axios
      .post(backend_url + "/api/auth/signup", { username, password })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err.response.data;
      });
  };

  login = (username, password) => {
    console.log(`Logging in`)
    return axios
      .post(backend_url + "/api/auth/login", { username, password })
      .then((response) => {
        console.log(response.data)
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  };

  logout = () => {
    console.log(`Logging out`)
    return axios
      .post(backend_url + "/api/auth/logout")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  };

  loggedin = () => {
    console.log(`checking login`)
    return axios
      .get(backend_url + '/api/auth/loggedin')
      .then(response => { return response.data})
  };
}

const authService = new AuthService();

export default authService;
