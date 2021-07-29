import axios from "axios";
const backend_url = process.env.REACT_APP_BACKEND_URL;

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: backend_url,
      withCredentials: true,
    });
  }

  signup = (username, password, email) => {
    return this.service
      .post(backend_url + "/api/auth/signup", { username, password, email })
  };

  login = (username, password) => {
    console.log(`Logging in`)
    return this.service
      .post(backend_url + "/api/auth/login", { username, password })
      .then((response) => {
        console.log(response)
        return response;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  logout = () => {
    console.log(`Logging out`)
    return this.service
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
    return this.service
      .get(backend_url + '/api/auth/loggedin')
      .then(response => { console.log(response.data); return response.data})
  };
}

const authService = new AuthService();

export default authService;
