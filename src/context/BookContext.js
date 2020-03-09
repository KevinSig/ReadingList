import React, { useReducer, createContext, useEffect } from "react";
// import uuid from "uuid/v1";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, /*setBooks*/ dispatch] = /*useState*/ useReducer(bookReducer,[], ()=>{
      const localData = localStorage.getItem('books')
      return localData ? JSON.parse(localData) : []
  });
  
    useEffect(()=>{
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

  return (
    <BookContext.Provider value={{ books, dispatch /*addBook, removeBook*/ }}>
      {props.children}
    </BookContext.Provider>
  );
  //props.children represents the components that this function will rap
};

export default BookContextProvider;








//now housed in bookk reducer

//   const addBook = (title, author) => {
//     setBooks([...books, { title: title, author: author, id: uuid() }]);
//   };

//   const removeBook = id => {
//     setBooks(books.filter(book => book.id !== id)); // will remove from array
//   };
