import React, { useContext } from "react";
import  { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext); // the state of books
  return (
    <div className="navbar">
      <h1>Reading list</h1>
      <p>You have {books.length} books  to read</p>
    </div>
  );
};

export default Navbar;
