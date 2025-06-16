import React, { useState, useRef } from "react";
import { createAlbum } from "../../api/albumService";

const AlbumForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [albumImages, setAlbumImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const coverInputRef = useRef(null);
  const imagesInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title || !date || !coverImage || albumImages.length === 0) {
      setError("Please fill all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("coverImage", coverImage);
    albumImages.forEach((file) => formData.append("albumImages", file));

    setLoading(true);
    try {
      await createAlbum(formData);
      setTitle("");
      setDescription("");
      setDate("");
      setCoverImage(null);
      setAlbumImages([]);
      coverInputRef.current.value = "";
      imagesInputRef.current.value = "";
      alert("Album created successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create album");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Create New Album
      </h2>

      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg border border-red-100">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Album Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Summer Vacation 2023"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Tell us about this album..."
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Event Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Cover Image <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex-1 cursor-pointer">
              <div className="px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  ref={coverInputRef}
                  onChange={(e) => setCoverImage(e.target.files[0])}
                  accept="image/*"
                  className="hidden"
                  required
                />
                <p className="text-center text-gray-500">
                  {coverImage ? coverImage.name : "Click to select cover image"}
                </p>
              </div>
            </label>
            {coverImage && (
              <button
                type="button"
                onClick={() => {
                  setCoverImage(null);
                  coverInputRef.current.value = "";
                }}
                className="px-3 py-1 text-sm text-red-500 hover:text-red-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Album Images (Up to 100) <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex-1 cursor-pointer">
              <div className="px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  ref={imagesInputRef}
                  onChange={(e) => setAlbumImages([...e.target.files])}
                  accept="image/*"
                  multiple
                  className="hidden"
                  required
                />
                <p className="text-center text-gray-500">
                  {albumImages.length > 0
                    ? `${albumImages.length} file(s) selected`
                    : "Click to select album images"}
                </p>
              </div>
            </label>
            {albumImages.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setAlbumImages([]);
                  imagesInputRef.current.value = "";
                }}
                className="px-3 py-1 text-sm text-red-500 hover:text-red-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating...
              </span>
            ) : (
              "Create Album"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AlbumForm;
