import axios from "axios";
const backend_url = "http://localhost:5005";

class DataService {
  constructor() {
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
}

  
const dataService = new DataService();

export default dataService;
