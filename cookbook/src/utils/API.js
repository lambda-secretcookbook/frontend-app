import axios from "axios";

export default axios.create({
  baseURL: "https://lambdaschool-cookbook2.herokuapp.com/",
  headers: {
    Authorization: `${localStorage.getItem("token")}`
  },
  responseType: "json"
});
