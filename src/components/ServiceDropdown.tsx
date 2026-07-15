"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface ServiceDropdownProps {
  title: string;
  description: string;
  details: string[];
}

export const ServiceDropdown: React.FC<ServiceDropdownProps> = ({
  title,
  description,
  details,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-hover border-2 border-cream-200 bg-cream-50 rounded-lg p-6 cursor-pointer smooth-transition">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 text-left"
      >
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground hover:text-teal-accent smooth-transition">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            {description}
          </p>
        </div>
        <FaChevronDown
          className={`w-5 h-5 text-teal-accent mt-1 flex-shrink-0 smooth-transition ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="animate-slide-in-down mt-4 pt-4 border-t-2 border-cream-200">
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-accent text-white text-xs flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
