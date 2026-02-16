import { useState } from "react";

export default function Slideshow({ pictures = [], title = "Logement" }) {
    const [index, setIndex] = useState(0);
    const total = pictures.length;

    if (!pictures || total === 0) {
        return null
    }

    const controls = total > 1;

    const goPrev = () => {
        setIndex((prev) => (prev === 0 ? total -1 : prev -1))
    }

    const goNext = () => {
        setIndex((prev) => prev === total -1 ? 0 : prev +1)
    }

    return (
        <div className="slideshow">
            <img  className="slideshow-img" src={pictures[index]} alt={`${title} - ${index + 1}`}/>

            {controls && (
                <>
                    <button type="button" className="slideshow-arrow slideshow-arrow--left" onClick={goPrev}>
                        ‹
                    </button>

                    <button type="button" className="slideshow-arrow slideshow-arrow--right" onClick={goNext}>
                        ›
                    </button>

                    <div className="slideshow-counter">
                        {index +1}/{total}
                    </div>
                </>
            )}

        </div>
    )
}