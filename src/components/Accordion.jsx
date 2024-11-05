"use client";
import { useState } from "react";

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div>
        <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        {isOpen && <div>Content</div>}
        </div>
    );
};

export default Accordion;