import Image from 'next/image';

export default function TestingAndFiltrationPage() {
  return (
    <div className="testing-filtration-page-container">
      <h1>Testing and Transformer Oil Filtration</h1>

      {/* Image Section */}
      <div className="filtration-image">
        <Image
          src="/image/13.jpg" // Path to your image
          alt="Testing and Transformer Oil Filtration"
          width={800} // Adjust width
          height={500} // Adjust height
          className="service-image"
        />
      </div>

      {/* Content Section */}
      <div className="filtration-content">
        <p>
          We specialize in testing and transformer oil filtration to ensure the
          efficient and safe operation of electrical equipment. Our services
          include:
        </p>
        <ul>
          <li>Comprehensive testing of transformer oil.</li>
          <li>Oil filtration to remove impurities and moisture.</li>
          <li>Maintenance services to extend transformer life.</li>
          <li>Certified equipment and professional technicians.</li>
        </ul>
      </div>
    </div>
  );
}
