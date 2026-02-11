import React from "react";
import Link from "next/link";

interface SingleImageProps {
    imageUrl: string;
    link: string;
    alt?: string;
}

const SingleImage: React.FC<SingleImageProps> = ({
    imageUrl,
    link,
    alt = "banner",
}) => {
    return (
        <div>
            <Link href={link} style={{ width: "100%" }}>
                <div
                    style={{
                        width: "100%",
                        height: "400px",
                        cursor: "pointer",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src={imageUrl}
                        alt={alt}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "0.3s ease",
                        }}
                    />
                </div>
            </Link>
        </div>
    );
};

export default SingleImage;