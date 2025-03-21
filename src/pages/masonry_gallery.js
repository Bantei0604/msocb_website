import React, { useState } from "react"
import Masonry from "react-masonry-css"
import "../components/fonts.css"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

import Gallery1 from "../images/gal-1.jpg"
import Gallery2 from "../images/gal-2.jpg"
import Gallery3 from "../images/gal-3.jpg"
import Gallery4 from "../images/gal-4.jpg"
import Gallery5 from "../images/gal-5.jpg"
import Gallery6 from "../images/gal-6.jpg"
import Gallery7 from "../images/gal-7.jpg"
import Gallery8 from "../images/gal-8.jpg"
import Gallery9 from "../images/gal-9.jpg"
import Gallery10 from "../images/gal-10.jpg"
import Gallery11 from "../images/gal-11.jpg"
import Gallery12 from "../images/gal-12.jpg"
const images = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
  Gallery10,
  Gallery11,
  Gallery12,
]

const MasonryGallery = () => {
  const breakpointColumns = {
    default: 4,
    1024: 3,
    768: 2,
    480: 1,
  }

  const imagesPerPage = 6 // Number of images per page
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(images.length / imagesPerPage)

  // Slice the images for the current page
  const displayedImages = images.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  )

  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 mt-2 mb-4">
        <h1 className="text-4xl text-center text-green-600 font-bold mb-6">
          Photo Gallery
        </h1>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {displayedImages.map((img, index) => (
            <div
              key={index}
              className="mb-4 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </Masonry>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg disabled:bg-gray-400"
            onClick={() => setCurrentPage(prev => prev - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg disabled:bg-gray-400"
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MasonryGallery
