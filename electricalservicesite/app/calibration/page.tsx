import Image from 'next/image';

export default function CalibrationPage() {
  return (
    <div className="calibration-page-container">
      <h1>Calibration Services</h1>

      {/* Image Section */}
      <div className="calibration-image">
        <Image
          src="/image/5.png" // Path to your image
          alt="Calibration Service"
          width={800} // Adjust width as needed
          height={500} // Adjust height as needed
          className="service-image"
        />
      </div>

      {/* Content Section */}
      <div className="calibration-content">
        <p>
          Our calibration services ensure your equipment operates at maximum
          accuracy and complies with industry standards. We use state-of-the-art
          tools and certified procedures to meet your needs.
        </p>
        <ul>
          <li>Precision Calibration for Instruments</li>
          <li>Compliance with International Standards</li>
          <li>Quick Turnaround Time</li>
          <li>Comprehensive Documentation</li>
        </ul>
      </div>
    </div>
  );
}
