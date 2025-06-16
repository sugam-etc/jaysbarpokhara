import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("YOUR_EMAILJS_USER_ID");

const BookingPage = () => {
  const [selectedActivity, setSelectedActivity] = useState("dine"); // Default to 'dine'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    specialRequests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const activities = [
    {
      id: "karaoke",
      title: "Karaoke",
      description: "Private singing rooms with thousands of songs",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a5d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "dine",
      title: "Dining",
      description: "Seasonal menu with craft cocktails",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "brunch",
      title: "Brunch",
      description: "Weekend brunch with live acoustic music",
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: "private-hire",
      title: "Private Hire",
      description: "Exclusive venue for events and celebrations",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "events",
      title: "Live Events",
      description: "Curated lineup of performances",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "ladiesnight",
      title: "Ladies Night",
      description: "Perfect to chill",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (!formData.name.trim()) errors.name = "Required";
    if (!emailRegex.test(formData.email)) errors.email = "Invalid email";
    if (!phoneRegex.test(formData.phone)) errors.phone = "Invalid phone";
    if (!formData.date) errors.date = "Required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log(formData);

    setIsSubmitting(true);

    try {
      const activity = activities.find((a) => a.id === selectedActivity);

      await emailjs.send(
        "YOUR_EMAILJS_SERVICE_ID",
        "YOUR_EMAILJS_TEMPLATE_ID",
        {
          activity_type: activity.title, // Changed from just 'activity' to be more explicit
          activity_description: activity.description, // Added description too
          ...formData,
          to_email: "your-business@email.com",
          to_name: "Booking Team",
        }
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        guests: 1,
        specialRequests: "",
      });
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Failed to send booking:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center border border-black p-8">
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-medium mb-2">Booking Confirmed</h2>
          <p className="mb-6">
            We've received your request for{" "}
            {activities.find((a) => a.id === selectedActivity)?.title}.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="w-full py-3 border border-black hover:bg-black hover:text-white transition-colors"
          >
            New Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-medium mb-2">Make a Reservation</h1>
          <p className="text-sm">
            For inquiries, email booking@example.com or call (555) 123-4567
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Activity Selection */}
          <div>
            <h2 className="text-xl font-medium mb-4">Select Experience</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {activities.map((activity) => (
                <button
                  key={activity.id}
                  onClick={() => setSelectedActivity(activity.id)}
                  className={`p-4 text-left border hover:bg-gray-50 transition-colors flex items-start ${
                    selectedActivity === activity.id
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium mb-1">{activity.title}</h3>
                    <p className="text-sm text-gray-600">
                      {activity.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="border-t lg:border-t-0 lg:border-l border-gray-300 pt-8 lg:pt-0 lg:pl-8">
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-2">
                {activities.find((a) => a.id === selectedActivity)?.title}
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                {activities.find((a) => a.id === selectedActivity)?.description}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 border text-sm ${
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-xs text-red-500">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border text-sm ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-3 border text-sm ${
                      formErrors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.phone && (
                    <p className="mt-1 text-xs text-red-500">
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full p-3 border text-sm ${
                      formErrors.date ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.date && (
                    <p className="mt-1 text-xs text-red-500">
                      {formErrors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2">Guests *</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "person" : "people"}
                      </option>
                    ))}
                    <option value="9+">9+ people</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Special Requests</label>
                <textarea
                  name="specialRequests"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-sm"
                />
              </div>

              <div className="pt-4 flex justify-between items-center">
                <p className="text-xs text-gray-500">* Required fields</p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm"
                >
                  {isSubmitting ? "Sending..." : "Confirm Booking"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
