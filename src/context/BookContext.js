import React, { useContext, useState, createContext } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Art of War", author: "Robert Greene", id: "1" },
    { title: "PowerPuffGirls", author: "Mojo Jojo", id: "2" },
    { title: "Dream Team", author: "Amir Sigari", id: "3 " }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuid() }]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id)); // will remove from array
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
  //props.children represents the components that this function will rap
};

export default BookContextProvider;
