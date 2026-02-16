import { useState } from "react";

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen ] = useState(false);

    return (
        <section className={`collapse ${isOpen ? "isOpen" : ""}`}>
            <button type="button" className="collapse-header" onClick={() => setIsOpen((value) => !value)}>
                <span className="collapse-title">{title}</span>

                <span className="collapse-icon">
                    <svg width="24" height="14" viewBox="0 0 24 14">
                        <path d="M2 12L12 2L22 12" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </button>

            <div className="collapse-content">
                <div className="collapse-content-inner">
                    {children}
                </div>
            </div>
        </section>
    );
}