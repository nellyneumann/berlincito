import axios from "axios";
const backend_url = process.env.REACT_APP_BACKEND_URL;

class DataService {
  constructor() {
      console.log(process.env.REACT_APP_BACKEND_URL);
    this.service = axios.create({
      baseURL: backend_url,
      withCredentials: true,
    });
  }

  postEvent = (title, organizer, description, date, address) => {
    return this.service
      .post(backend_url + "/api/event", { title, description, organizer, date, address })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err.response.data;
      });
  };

  getEvents = () => {
    return this.service
      .get(backend_url + "/api/events")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err.response.data;
      });
  };
}

  
const dataService = new DataService();

export default dataService;
