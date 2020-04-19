import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  console.log(title)

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title: title,
        author: author
      }
     });
    setAuthor("");
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onInvalid="alert('You must fill out the form!');"
        required
      />
      <input
        type="text"
        placeholder="Book Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
        onInvalid="alert('You must fill out the form!');"
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default NewBookForm;
