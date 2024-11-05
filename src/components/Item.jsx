"use client";
import { useState } from "react";

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none text-black">{title}</button>
            {isOpen && <div className="p-4 bg-white text-black">{children}</div>}
        </div>
    );
};

export default Item;