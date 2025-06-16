import axios from "axios";

const API_BASE = "https://jaysbar-backend.onrender.com/api/exhibitions";

// GET: Fetch all exhibitions
export const getExhibitions = () => axios.get(API_BASE);

// GET: Fetch a single exhibition by ID
export const getExhibitionById = (id) => axios.get(`${API_BASE}/${id}`);

// GET: Fetch exhibitions for navbar (only navTitle and _id)
export const getExhibitionsForNav = () =>
  axios.get(`${API_BASE}/nav/exhibitions`);

// POST: Create a new exhibition with image + gallery uploads
export const createExhibition = (dataFields, imageFile, galleryImages) => {
  const formData = new FormData();
  formData.append("data", JSON.stringify(dataFields));

  if (imageFile) {
    formData.append("image", imageFile);
  }

  if (galleryImages && galleryImages.length > 0) {
    galleryImages.forEach((file) => {
      formData.append("images", file);
    });
  }

  return axios.post(API_BASE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// PUT: Update an existing exhibition by ID with optional new files
export const updateExhibition = (id, dataFields, imageFile, galleryImages) => {
  const formData = new FormData();
  formData.append("data", JSON.stringify(dataFields));

  if (imageFile) {
    formData.append("image", imageFile);
  }

  if (galleryImages && galleryImages.length > 0) {
    galleryImages.forEach((file) => {
      formData.append("images", file);
    });
  }

  return axios.put(`${API_BASE}/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// DELETE: Remove an exhibition by ID
export const deleteExhibition = (id) => axios.delete(`${API_BASE}/${id}`);
