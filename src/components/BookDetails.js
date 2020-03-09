import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

//passed book as a prop
const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext); // we want access to the functions inside fo BookContext
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author ">{book.author}</div>
    </li>
  );
};

export default BookDetails;
