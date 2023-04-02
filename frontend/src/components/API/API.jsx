import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
// const token = localStorage.getItem( "jwt");
export const getAPI = async (api_url, token = null) => {
  try {
    const headers = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const response = await axios.get(api_url, { headers });
    return response.data;
  } catch (error) {
    console.log("Error from GET API");
  }
};

export const postAPI = async (api_url, api_data, token = null) => {
  try {
    return await axios.post(api_url, api_data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const base_url = "http://localhost:3000/";
