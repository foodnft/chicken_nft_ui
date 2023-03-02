import Axios from "axios";

// const url = "http://localhost:5000/api/v1";
const url = "https://bchbackend.herokuapp.com/api/v1";

const axios = Axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
    Authorization: `${sessionStorage.getItem("token")}`,
  },
});

export const asyncApiCall = async (payload) => {
  return axios(payload.url, {
    method: payload.method,
    data: payload.data,
  });
};
