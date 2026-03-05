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
    <div
      style={{
        padding: "0px",
      }}
    >
      <Link href={link} style={{ width: "100%", display: "block" }}>
        <div
          style={{
            width: "100%",
            cursor: "pointer",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
          }}
        >
          <img
            src={imageUrl}
            alt={alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
          />
        </div>
      </Link>
    </div>
  );
};

export default SingleImage;