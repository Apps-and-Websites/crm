import axios from "axios";
import storage from "local-storage-fallback";

const BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST;

const axiosWithAuth = () => {
  const token = storage.getItem("token");
  return axios.create({
    baseURL: `${BACKEND_HOST}/api`,
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;
