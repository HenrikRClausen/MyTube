import axios from "axios";

const KEY = "AIzaSyCRBf_Y47sVkFomNoDo3iTDhx4ATNWlOxY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
    q: "Constitution"
  }
});
