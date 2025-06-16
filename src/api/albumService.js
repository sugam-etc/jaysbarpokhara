import axios from "axios";

const API_BASE = "http://localhost:5000/api/albums";

export const getAlbums = async () => {
  try {
    const response = await axios.get(API_BASE);
    // Extract the data array from the response
    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching albums:", error);
    return [];
  }
};

export const getAlbumById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE}/${id}`);
    return response.data.data || null;
  } catch (error) {
    console.error("Error fetching album:", error);
    return null;
  }
};

export const createAlbum = async (formData) => {
  try {
    const response = await axios.post(API_BASE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data || null;
  } catch (error) {
    console.error("Error creating album:", error);
    throw error;
  }
};
