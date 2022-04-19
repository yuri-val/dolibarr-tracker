import axios from "axios";
import { fromStore } from "../localStorageStore";

const settings = fromStore("settings");

export default axios.create({
  baseURL: `${settings.host}/api/index.php/`,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    DOLAPIKEY: settings.token,
  },
});
