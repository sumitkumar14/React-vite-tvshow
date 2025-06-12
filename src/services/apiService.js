import axios from "axios";

// Define the base API URL
const API_BASE_URL = `${import.meta.env.VITE_API_URL}`;

//header
const headers = { "Content-Type": "application/json" };

// Function to fetch TvSeriesList
export const getSeriesList = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/shows`,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error; 
  }
};

export const searchSeriesList = async (val) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/search/shows?q=${val}`,{ headers });
      return response.data;
    } catch (error) {
      console.error("Error fetching searched posts:", error);
      throw error; 
    }
  };

  export const getSeriesDetails = async (showId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/shows/${showId}`,{ headers });
      return response.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error; 
    }
  };

  export const getSeriesCastDetails = async (showId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/shows/${showId}/cast`,{ headers });
      return response.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error; 
    }
  };

  export const getSeriesEpisodesDetails= async (showId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/shows/${showId}/episodes`,{ headers });
      return response.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error; 
    }
  };