"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  image: string;
  rating: string;
  testimonial: string; // Menggunakan string untuk testimonial langsung
}

const TestimonialCard = ({
  name,
  image,
  rating,
  testimonial,
}: TestimonialCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;

  const handleToggleExpand = () => setIsExpanded(!isExpanded);

  const displayText =
    testimonial.length > maxLength && !isExpanded
      ? testimonial.substring(0, maxLength) + "..."
      : testimonial;

  return (
    <Card className="w-full sm:w-[450px] max-w-full min-h-[300px] flex flex-col justify-between">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div>
          <p
            className={`text-gray-800 mb-4 transition-all duration-300 ease-in-out`}
          >
            {displayText}
          </p>

          {testimonial.length > maxLength && (
            <button
              onClick={handleToggleExpand}
              className="text-blue-600 flex items-center space-x-1 mt-2 transition-all duration-300"
            >
              <span>
                {isExpanded ? "Baca Lebih Sedikit" : "Baca Selengkapnya"}
              </span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="text-black text-xl mt-1">{rating}</div>
          </div>
          <img
            src={image}
            alt={name}
            className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover mt-4 sm:mt-0"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
