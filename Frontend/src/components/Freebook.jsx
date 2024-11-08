import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Freebook() {

  // data fetching from backend
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((book) => book.category === "Free");
        console.log(data);
        setBooks(data);
      }
      catch(err){
        console.log("Error: ",err);
      }
    }
    getBook();
  },[]);
  // slider settings
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div >
          <h1 className="font-bold text-xl pb-3">Free Offered Books</h1>
          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet in
            earum perferendis saepe non nam consequuntur quae explicabo fugiat
            laboriosam.
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {books.map((freeBook) => (
              <Cards key={freeBook.id} books={freeBook} />  
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
