import React, { useEffect, useState } from "react";
import Cards from "./Cards";

import axios from "axios";

import { Link } from "react-router-dom";

function Course() {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBooks(res.data);
      }
      catch(err){
        console.log("Error: ",err);
      }
    }
    getBook();
  },[]);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="pt-28 items-center justify-center text-center ">
          <h1 className="text-2xl md:text-4xl">
            We'r delighted to have you{" "}
            <span className="text-pink-500">here ! :)</span>
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            consequatur eius laudantium nesciunt a cupiditate reprehenderit
            provident possimus, quo adipisci ut eligendi praesentium, quasi
            perferendis veniam omnis. Ut maxime repellendus magnam eos
            laudantium porro. Consequatur dolor enim rerum. Magnam, asperiores.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white rounded-md hover:bg-pink-700 duration-300 cursor-pointer px-3 py-2">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {books.map((paidBook) => (
            <Cards books={paidBook} key={paidBook.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
