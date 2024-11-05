"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button onClick={() => setIsOpen(!isOpen)} className={`flex items-center justify-between w-full text-left py-4 px-6 transition-colors duration-200 ${isOpen ? "bg-white text-gray-800" : "bg-[#F5F9FF] text-gray-700"} hover:bg-[#E0E8F8] focus:outline-none`}>
                <span className="text-lg font-semibold">{title}</span>
                <FiChevronDown  className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`} />
            </button>
            {isOpen && (
                <div className="p-6 bg-white text-gray-800 shadow-md rounded-b-lg">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Item;
