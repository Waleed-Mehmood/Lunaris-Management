import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import houseImage from "../assets/images/landing-section.png"; // replace with your image path
import { useNavigate } from "react-router-dom";

export default function PropertyHero({ onSearch }) {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // If you want to use a parent callback, keep this
    if (onSearch) {
      onSearch({ location, guests });
    }
    // Navigate to Properties page with query params
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (guests) params.append("guests", guests);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="bg-white py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="bg-white p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
            {/* Left Image */}
            <div className="flex-shrink-0 rounded-3xl overflow-hidden w-full lg:w-1/2 xl:w-auto">
              <img
                src={houseImage}
                alt="House"
                className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] xl:h-[320px] object-cover rounded-3xl mx-auto"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-between h-full w-full lg:w-1/2 xl:flex-1">
              {/* Top Text */}
              <div className="text-center lg:text-left">
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wider uppercase text-gray-800 leading-tight">
                  Be a Co-Landlord <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>Brick by Brick
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg mt-2 sm:mt-3 md:mt-4 leading-relaxed max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
                  At Lunaris, we build trusted relationships with property owners through cutting-edge technology and personalized service. With 100+ managed properties and an average 20% revenue uplift, we deliver consistent growth and long-term value.
                </p>
              </div>

              {/* Listed Properties */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-4 sm:mt-6 md:mt-8 text-center lg:text-left leading-tight">
                <span className="block">250+ LISTED</span>
                <span className="block">PROPERTIES</span>
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl lg:rounded-full p-3 sm:p-4 flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-3 sm:gap-4">
              <div className="flex flex-col items-start w-full lg:w-auto lg:border-r border-gray-300 lg:pr-4 lg:flex-1">
                <label className="text-xs sm:text-sm text-gray-500 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="bg-transparent border-none outline-none text-gray-700 font-medium placeholder-gray-500 w-full text-sm sm:text-base"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-start w-full lg:w-auto lg:flex-1">
                <label className="text-xs sm:text-sm text-gray-500 mb-1">
                  Guests
                </label>
                <input
                  type="number"
                  placeholder="Add guests"
                  min="1"
                  className="bg-transparent border-none outline-none text-gray-700 font-medium placeholder-gray-500 w-full text-sm sm:text-base"
                  value={guests}
                  onChange={e => setGuests(e.target.value)}
                />
              </div>

              <button
                onClick={handleSearch}
                className="bg-[#172c3e] hover:bg-[#325d83] text-white p-2 sm:p-3 rounded-full transition duration-200 w-full lg:w-auto flex items-center justify-center"
              >
                <FiSearch size={16} className="sm:hidden" />
                <FiSearch size={20} className="hidden sm:block" />
                <span className="ml-2 lg:hidden text-sm sm:text-base">
                  Search
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
