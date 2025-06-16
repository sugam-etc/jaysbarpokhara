import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getExhibitionById } from "../api/WhatsonService";

const getPlaceholderImage = (width, height, text) =>
  `https://placehold.co/${width}x${height}/F0F0F0/4B5563?text=${text.replace(
    /\s/g,
    "+"
  )}`;

const BASE_URL = "http://localhost:5000"; // Adjust if your backend is hosted elsewhere

const RenderWhatsOn = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const galleryRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getExhibitionById(id);
        setData(res.data);
      } catch (error) {
        console.error("Failed to fetch exhibition:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = galleryRef.current.clientWidth / 2;
      galleryRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Loading exhibition...</div>;
  }

  if (!data) {
    return (
      <div className="min-h-[500px] flex items-center justify-center text-gray-500">
        No data to display.
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 font-inter text-gray-800">
      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden">
        {/* Hero Image */}
        <img
          src={
            data.heroImage
              ? `${BASE_URL}${data.heroImage}`
              : getPlaceholderImage(1600, 500, "Hero")
          }
          alt={data.title || "Hero"}
          className="absolute inset-0 w-full h-full object-cover object-center heroImage"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = getPlaceholderImage(1600, 500, "Hero Error");
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 ovrly"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 text-white z-20">
          {data.breadcrumbs && (
            <p className="text-sm opacity-80 mb-2">{data.breadcrumbs}</p>
          )}
          {data.title && (
            <h1 className="text-3xl sm:text-5xl font-bold">{data.title}</h1>
          )}
        </div>
      </section>

      {/* Text/Image Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-6xl mx-auto flex flex-col ${
            data.contentSide === "left" ? "md:flex-row" : "md:flex-row-reverse"
          } items-start gap-8 md:gap-12`}
        >
          <div className="md:w-1/2 flex-shrink-0 shadow-md border border-gray-200">
            <img
              src={
                data.mainContentImage
                  ? `${BASE_URL}${data.mainContentImage}`
                  : getPlaceholderImage(500, 350, "Section Image")
              }
              alt="Main Content"
              className="w-full h-auto object-cover object-center rounded-sm"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getPlaceholderImage(500, 350, "Image Error");
              }}
            />
          </div>
          <div className="md:w-1/2 text-left">
            {data.heading && (
              <h2 className="text-2xl sm:text-3xl font-light mb-4 text-gray-800">
                {data.heading}
              </h2>
            )}
            {data.contentBlocks?.map((block, index) => {
              if (block.type === "paragraph" && block.text) {
                return (
                  <p
                    key={index}
                    className="text-sm leading-relaxed text-gray-700 mb-4"
                  >
                    {block.text}
                  </p>
                );
              } else if (block.type === "listItem" && block.text) {
                return (
                  <ul
                    key={`ul-${index}`}
                    className="list-disc list-inside text-sm text-gray-700 ml-4 mb-4"
                  >
                    {block.text.split(",").map((item, i) => (
                      <li key={i} className="mb-1">
                        {item.trim()}
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
            {data.buttonText && data.buttonHref && (
              <a
                href={data.buttonHref}
                className="inline-block mt-4 px-6 py-2 border border-gray-500 text-gray-800 text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                {data.buttonText}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      {data.galleryImages?.length > 0 && (
        <section className="py-12 px-0 bg-white relative">
          <h2 className="text-3xl sm:text-4xl font-light text-center mb-10 text-gray-800">
            {data.galleryTitle || "Gallery"}
          </h2>
          <div className="relative">
            <div
              ref={galleryRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-4 pb-4 px-4 sm:px-6 lg:px-8"
            >
              {data.galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[20vw] xl:w-[15vw] snap-center"
                >
                  <img
                    src={`${BASE_URL}${img}`}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-48 sm:h-56 object-cover object-center rounded-md shadow-sm border border-gray-200"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getPlaceholderImage(
                        300,
                        200,
                        "Image Error"
                      );
                    }}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollGallery("left")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-md text-gray-800 hover:bg-opacity-90 transition-all duration-200 z-10 hidden md:block"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scrollGallery("right")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-md text-gray-800 hover:bg-opacity-90 transition-all duration-200 z-10 hidden md:block"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default RenderWhatsOn;
