import { Link } from "react-router-dom";

const privateRooms = [
  {
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Bespoke Designs",
    description:
      "All of our private karaoke rooms are individual in design so your experience will be completely different to the next one. Our rooms range in size from 2-35 people.",
    link: "/rooms/bespoke",
    buttonName: "View Room Details",
  },
  {
    img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Modern Studio",
    description:
      "Step into our sleek, state-of-the-art modern studio rooms, perfect for those who appreciate contemporary aesthetics and cutting-edge sound technology.",
    link: "/rooms/modern",
    buttonName: "View Room Details",
  },
  {
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Luxury Suite",
    description:
      "Indulge in the ultimate karaoke experience in our luxurious suites. Designed for comfort and style, these larger rooms offer premium amenities.",
    link: "/rooms/luxury",
    buttonName: "View Room Details",
  },
  {
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Themed Experience",
    description:
      "Dive into a themed karaoke adventure! Our unique themed rooms transport you to different worlds, providing an immersive backdrop for your singing prowess.",
    link: "/rooms/themed",
    buttonName: "View Room Details",
  },
];

const PrivateRooms = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-normal text-gray-900 mb-4">
            Discover Our Private Rooms
          </h2>
          <div className="w-20 h-px bg-gray-300 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {privateRooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={room.img}
                  alt={room.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-normal text-gray-900 mb-3">
                  {room.title}
                </h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  {room.description}
                </p>
                <Link
                  to={room.link}
                  className="mt-auto text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors inline-flex items-center"
                >
                  {room.buttonName} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivateRooms;
