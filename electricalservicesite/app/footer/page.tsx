import Link from 'next/link';
import React from 'react';

interface FooterProps {
  // Add any necessary props here, e.g., for customization
}

const Footer: React.FC<FooterProps> = ({ /* props */ }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h5>What We Do</h5>
          <ul>
            <li><Link href="/services/instrumentation-contracting">Instrumentation Contracting Services</Link></li>
            <li><Link href="/services/electrical-contracting">Electrical Contracting Services</Link></li>
            <li><Link href="/services/c-i-contracting">C&I Contracting Services</Link></li>
            <li><Link href="/services/data-center">Data Center Services</Link></li>
            <li><Link href="/services/testing-commissioning">Testing & Commissioning</Link></li>
            <li><Link href="/services/manpower">Manpower Services</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Useful Links</h5>
          <ul>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/corporate-video">Corporate Video</Link></li>
            <li><Link href="/reward">Reward</Link></li>
            <li><Link href="/brochure">Brochure</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/clients">Clients</Link></li>
            <li><Link href="/enquiry">Enquiry</Link></li>
            <li><Link href="/career">Career</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Contact Us</h5>
          <ul>
            <li>
              <span>Address:</span>
              <p>Plot No. A 223, 5th Floor, Road No. 16 V, Nehru Nagar, Wagle Industrial Estate, Thane (W)-400604</p>
            </li>
            <li>
              <span>Phone:</span>
              <p>+91 22 6942 1100</p>
            </li>
            <li>
              <span>E-Mail:</span>
              <p>tender@mirajespl.com</p>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Miraj's Social Initiative</h5>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab   
 fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">   

        <p>&copy; 2024 RSR Electronical Services Site Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;