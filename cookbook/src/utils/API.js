import axios from "axios";

export default axios.create({
  baseURL: "https://lambdaschool-cookbook2.herokuapp.com/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  },
  responseType: "json"
});
