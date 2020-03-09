import uuid from "uuid/v1";

//state represents the book object
export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuid()
        }
      ];

    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.id); //when we send an action of 'remove book' as payload will send id property

    default:
      return state;
  }
};

//reduces all the functions we need to manipulate the state
