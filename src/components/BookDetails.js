import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

//passed book as a prop
const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext); // we want access to the functions inside fo BookContext
  return (
    <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
      <div className="title">{book.title}</div>
      <div className="author ">{book.author}</div>
    </li>
  );
};

export default BookDetails;
 