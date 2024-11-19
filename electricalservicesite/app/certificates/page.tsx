"use client";

import Link from "next/link";
import styles from "./styles.module.css";

const certificates = [
  {
    id: 1,
    title: "ISO Certification",
    image: "/image/GOLD-Safety-shield-certificate-for-Institutes.ai_-scaled.webp",
    description: "ISO 9001:2015 Certification for Quality Management.",
  },
  {
    id: 2,
    title: "Safety Standards Certification",
    image: "/images.jfif",
    description: "Certification for meeting global safety standards.",
  },
  {
    id: 3,
    title: "Environmental Compliance",
    image: "/image/download.png",
    description: "Certification for environmental sustainability efforts.",
  },
];

export default function CertificatesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Certificates</h1>  {/* Use the new class */}
      <div className={styles.certificatesGrid}>
        {certificates.map((certificate) => (
          <div key={certificate.id} className={styles.certificateCard}>
            <img
              src={certificate.image}
              alt={certificate.title}
              className={styles.certificateImage}
            />
            <h2>{certificate.title}</h2>
            <p>{certificate.description}</p>
            <Link href={`/certificates/${certificate.id}`} className={styles.viewDetails}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
