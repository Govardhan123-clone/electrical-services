"use client";

import React from "react";
import styles from "../styles.module.css";

const galleryItems = [
  {
    id: 1,
    title: "Image 1",
    image: "/images/gallery-image-1.jpg",
    description: "Description for image 1.",
    details: "This is a more detailed description of image 1.",
  },
  {
    id: 2,
    title: "Image 2",
    image: "/images/gallery-image-2.jpg",
    description: "Description for image 2.",
    details: "This is a more detailed description of image 2.",
  },
  {
    id: 3,
    title: "Image 3",
    image: "/images/gallery-image-3.jpg",
    description: "Description for image 3.",
    details: "This is a more detailed description of image 3.",
  },
  {
    id: 4,
    title: "Image 4",
    image: "/images/gallery-image-4.jpg",
    description: "Description for image 4.",
    details: "This is a more detailed description of image 4.",
  },
];

export default function GalleryItemDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const galleryItem = galleryItems.find((item) => item.id === parseInt(id));

  if (!galleryItem) {
    return <p>Item not found!</p>;
  }

  return (
    <div className={styles.detailsContainer}>
      <h1>{galleryItem.title}</h1>
      <img
        src={galleryItem.image}
        alt={galleryItem.title}
        className={styles.galleryImageLarge}
      />
      <p>{galleryItem.details}</p>
    </div>
  );
}
