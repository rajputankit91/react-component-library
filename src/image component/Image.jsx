import React, { useState } from "react";
import "./image.css";

const Image = ({ src, alt = "Image", variant = "default", loaderColor = "#ccc", zoom = false, className = "", ...props }) => {
    const [loading, setLoading] = useState(true);
    const [zoomed, setZoomed] = useState(false);

    const handleImageLoad = () => {
        setLoading(false);
    }

    const handleZoomToggle = () => {
        if (zoom) setZoomed(!zoomed);
    }

    return (
        <div
            className={`image-container ${variant} ${zoomed ? "zoomed" : ""} ${className}`}
            onClick={handleZoomToggle}
            style={zoomed ? { cursor: "zoom-out" } : { cursor: zoom ? "zoom-in" : "default" }}
        >
            {loading && (
                <div
                    className="image-loader"
                    style={{ backgroundColor: loaderColor }}
                > </div>
            )}

            <img
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                className={`image ${loading ? "hidden" : ""}`}
                {...props}
            />
        </div>
    )
}

export default Image;
