"use client";

import Link from "next/link";
import styles from "./styles.module.css";

const galleryItems = [
  {
    id: 1,
    title: "Image 1",
    image: "/image/7.jpg",
    description: "Description for image 1.",
  },
  {
    id: 2,
    title: "Image 2",
    image: "/image/9.jpg",
    description: "Description for image 2.",
  },
  {
    id: 3,
    title: "Image 3",
    image: "/image/10.jpg",
    description: "Description for image 3.",
  },
  {
    id: 4,
    title: "Image 4",
    image: "/image/11.jpg",
    description: "Description for image 4.",
  },
];

export default function GalleryPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gallery</h1>
      <div className={styles.galleryGrid}>
        {galleryItems.map((item) => (
          <div key={item.id} className={styles.galleryCard}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.galleryImage}
            />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link href={`/gallery/${item.id}`} className={styles.viewDetails}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
