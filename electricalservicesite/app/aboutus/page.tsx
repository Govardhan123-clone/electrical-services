import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        {/* Text Section */}
        <div className="about-text">
          <p>
            Welcome to our company! We are committed to delivering exceptional electrical services tailored to meet your needs.
          </p>
          <p>
            Our team of experts ensures the highest quality standards, combining innovation and reliability to achieve customer satisfaction.
          </p>
        </div>

        {/* Image Section */}
        <div className="about-image">
          <Image
            src="/image/about.jpg" // Replace this with your image path
            alt="About Us"
            width={600} // Adjust width as needed
            height={400} // Adjust height as needed
            priority // Ensures the image is loaded eagerly for better performance
          />
        </div>
      </div>
    </div>
  );
}
