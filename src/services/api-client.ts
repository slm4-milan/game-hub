import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1cb9a79bcaa24f2fb00e288480e6b938",
  },
});
