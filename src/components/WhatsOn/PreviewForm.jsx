// PreviewForm.jsx
import React, { useState } from "react";
import { Plus, Minus, Upload } from "lucide-react";
import axios from "axios";

const WhatsOnForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    breadcrumbs: "",
    heroImage: null,
    navTitle: "",
    heading: "",
    mainContentImage: null,
    contentSide: "left",
    contentBlocks: [{ type: "paragraph", text: "" }],
    buttonText: "",
    buttonHref: "",
    galleryTitle: "",
    galleryImages: [],
  });

  const [previewHeroImage, setPreviewHeroImage] = useState(null);
  const [previewMainContentImage, setPreviewMainContentImage] = useState(null);
  const [previewGalleryImages, setPreviewGalleryImages] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContentBlockChange = (index, field, value) => {
    const updatedBlocks = [...formData.contentBlocks];
    updatedBlocks[index][field] = value;
    setFormData((prev) => ({ ...prev, contentBlocks: updatedBlocks }));
  };

  const addContentBlock = () => {
    setFormData((prev) => ({
      ...prev,
      contentBlocks: [...prev.contentBlocks, { type: "paragraph", text: "" }],
    }));
  };

  const removeContentBlock = (index) => {
    if (formData.contentBlocks.length <= 1) return;
    const updatedBlocks = formData.contentBlocks.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, contentBlocks: updatedBlocks }));
  };

  const handleHeroImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, heroImage: file }));
      setPreviewHeroImage(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, heroImage: null }));
      setPreviewHeroImage(null);
    }
  };

  const handleMainContentImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, mainContentImage: file }));
      setPreviewMainContentImage(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, mainContentImage: null }));
      setPreviewMainContentImage(null);
    }
  };

  const handleGalleryImagesUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setFormData((prev) => ({ ...prev, galleryImages: files }));
      setPreviewGalleryImages(files.map((file) => URL.createObjectURL(file)));
    } else {
      setFormData((prev) => ({ ...prev, galleryImages: [] }));
      setPreviewGalleryImages([]);
    }
  };

  const removeGalleryImage = (index) => {
    const updatedFiles = [...formData.galleryImages];
    updatedFiles.splice(index, 1);
    setFormData((prev) => ({ ...prev, galleryImages: updatedFiles }));

    const updatedPreviews = [...previewGalleryImages];
    updatedPreviews.splice(index, 1);
    setPreviewGalleryImages(updatedPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append(
        "data",
        JSON.stringify({
          title: formData.title,
          breadcrumbs: formData.breadcrumbs,
          navTitle: formData.navTitle,
          heading: formData.heading,
          contentSide: formData.contentSide,
          contentBlocks: formData.contentBlocks,
          buttonText: formData.buttonText,
          buttonHref: formData.buttonHref,
          galleryTitle: formData.galleryTitle,
        })
      );

      if (formData.heroImage) {
        formDataToSend.append("heroImage", formData.heroImage);
      }

      if (formData.mainContentImage) {
        formDataToSend.append("mainContentImage", formData.mainContentImage);
      }

      if (formData.galleryImages.length > 0) {
        formData.galleryImages.forEach((image) => {
          formDataToSend.append("galleryImages", image);
        });
      }

      const response = await axios.post(
        "http://localhost:5000/api/exhibitions",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccessMessage("Exhibition created successfully!");

      // Reset form
      setFormData({
        title: "",
        breadcrumbs: "",
        heroImage: null,
        heading: "",
        navTitle: "",
        mainContentImage: null,
        contentSide: "left",
        contentBlocks: [{ type: "paragraph", text: "" }],
        buttonText: "",
        buttonHref: "",
        galleryTitle: "",
        galleryImages: [],
      });
      setPreviewHeroImage(null);
      setPreviewMainContentImage(null);
      setPreviewGalleryImages([]);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "Failed to create exhibition. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
        Create New Exhibition
      </h2>

      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Hero Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Hero Section</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Exhibition title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nav Title
              </label>
              <input
                type="text"
                name="navTitle"
                value={formData.navTitle}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Party Night (Sat)"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hero Image (recommended: 1920x600px){" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-4">
              <label className="flex-1">
                <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <Upload className="w-5 h-5 mb-2 text-gray-500" />
                  <span className="text-sm text-gray-600 text-center">
                    {formData.heroImage
                      ? formData.heroImage.name
                      : "Upload hero banner image (recommended: 1920x600px)"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleHeroImageUpload}
                    className="hidden"
                    required
                  />
                </div>
              </label>
              {previewHeroImage && (
                <div className="w-24 h-24 border rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={previewHeroImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Main Content</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Heading <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="heading"
              value={formData.heading}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="About the exhibition"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content Image (recommended: 750x500px){" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-4">
                <label className="flex-1">
                  <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <Upload className="w-5 h-5 mb-2 text-gray-500" />
                    <span className="text-sm text-gray-600 text-center">
                      {formData.mainContentImage
                        ? formData.mainContentImage.name
                        : "Upload content image (recommended: 750x500px)"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleMainContentImageUpload}
                      className="hidden"
                      required
                    />
                  </div>
                </label>
                {previewMainContentImage && (
                  <div className="w-24 h-24 border rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={previewMainContentImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image Position
              </label>
              <select
                name="contentSide"
                value={formData.contentSide}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content Blocks <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {formData.contentBlocks.map((block, index) => (
                <div
                  key={index}
                  className="p-3 border border-gray-200 rounded-md bg-gray-50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <select
                      value={block.type}
                      onChange={(e) =>
                        handleContentBlockChange(index, "type", e.target.value)
                      }
                      className="text-sm p-1 border border-gray-300 rounded"
                    >
                      <option value="paragraph">Paragraph</option>
                      <option value="listItem">List Item</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => removeContentBlock(index)}
                      className="text-red-500 hover:text-red-700 disabled:text-gray-400 text-sm flex items-center"
                      disabled={formData.contentBlocks.length <= 1}
                    >
                      <Minus size={14} className="mr-1" /> Remove
                    </button>
                  </div>
                  {block.type === "paragraph" ? (
                    <textarea
                      value={block.text}
                      onChange={(e) =>
                        handleContentBlockChange(index, "text", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                      placeholder="Enter content..."
                      required
                    />
                  ) : (
                    <input
                      type="text"
                      value={block.text}
                      onChange={(e) =>
                        handleContentBlockChange(index, "text", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter list item..."
                      required
                    />
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addContentBlock}
                className="mt-1 text-sm text-blue-600 hover:text-blue-800 flex items-center"
              >
                <Plus size={14} className="mr-1" /> Add Content Block
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Button Text
              </label>
              <input
                type="text"
                name="buttonText"
                value={formData.buttonText}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Learn More"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Button Link
              </label>
              <input
                type="text"
                name="buttonHref"
                value={formData.buttonHref}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://example.com"
              />
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Image Gallery</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gallery Title
            </label>
            <input
              type="text"
              name="galleryTitle"
              value={formData.galleryTitle}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Exhibition Highlights"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gallery Images (recommended: 400x300px)
            </label>
            <label className="block">
              <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <Upload className="w-5 h-5 mb-2 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {formData.galleryImages.length > 0
                    ? `Upload more images (${formData.galleryImages.length} selected)`
                    : "Upload multiple images for gallery (recommended: 400x300px each)"}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleGalleryImagesUpload}
                  className="hidden"
                  multiple
                />
              </div>
            </label>

            {previewGalleryImages.length > 0 && (
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {previewGalleryImages.map((preview, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={preview}
                      alt={`Gallery preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-md border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => removeGalleryImage(index)}
                      className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Remove image"
                    >
                      <Minus size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 transition-colors flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                Processing...
              </>
            ) : (
              "Create Exhibition"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WhatsOnForm;
