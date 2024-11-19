"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./globals.css";


import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

  const handleLogin = async () => {
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    setIsAuthenticated(false);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search/${searchQuery}`;
    } else {
      alert("Please enter a search term.");
    }
  };

  return (
    <html lang="en">
      <head>
        <title>TRANSTECH ENGINEERS</title>
      </head>
      <body>
        <header className="header">
          <nav className="top-nav">
            <Link href="/" className="logo">
              <Image src="/image/ele.jpg" alt="Electronic site" width={100} height={50} />
            </Link>

            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button onClick={handleSearch} className="search-button">
                Search
              </button>
            </div>

            <div className="auth-links">
              {isAuthenticated ? (
                <>
                  <button onClick={handleLogout} className="nav-button">
                    Logout
                  </button>
                  <Link href="/change-password" className="nav-link">
                    Change Password
                  </Link>
                </>
              ) : (
                <>
                  {/* Customer Service with Mouseover */}
                  <div
                    className="nav-link-dropdown"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <Link href="/customerservice" className="nav-link">
                      Customer Service
                    </Link>
                    {showDropdown && (
                      <div className="dropdown-menu">
                        <Link href="/calibration" className="dropdown-item">
                        calibration
                        </Link>
                        <Link href="/testing-and-transformer-oil-filtration" className="dropdown-item">
                        testing-and-transformer-oil-filtration
                        </Link>
                  
                      </div>
                    )}
                  </div>
                  <Link href="/" className="nav-link">
                Home
              </Link>



              <Link href="/aboutus" className="nav-link">
                About Us
              </Link>
              <Link href="/contact" className="nav-link">
                Contact Us
              </Link>
              
                  <Link href="/client" className="nav-link">
                    Client
                  </Link>
                  <Link href="/certificates" className="nav-link">
                    Certificates
                  </Link>
                  <Link href="/gallery" className="nav-link">
                    Gallery
                  </Link>
                  
            



                </>
              )}
            </div>
          </nav>
        </header>

        {/* Image Slider */}
        <div className="slider-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="swiper-container"
          >
            <SwiperSlide>
              <Image src="/image/Slider-template-375px-H-6-01.webp" alt="Banner 1" layout="responsive" width={1200} height={400} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/image/eimage.jpg" alt="Banner 2" layout="responsive" width={1200} height={400} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/image/eimage2.jpg" alt="Banner 3" layout="responsive" width={1200} height={400} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/image/eimage3.jpg" alt="Banner 4" layout="responsive" width={1200} height={400} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="layout">
          <main className="main-content">{children}</main>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Electrical Servicer Site.</p>
            <div className="company-info">
              <p>
                <strong>Phone:</strong> 9902496920
              </p>
              <p>
                <strong>Email:</strong> Electricalservicer@gmail.com
              </p>
              <p>
                <strong>Address:</strong> 123 Business Karnataka, Bangalore, India, 12345
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
