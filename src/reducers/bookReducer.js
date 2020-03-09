export const bookReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_BOOK':
            return [...state,{
                title: action.book.title,
                author: action.book.author, 
                
            }]
    }
}

//reduces all the functions we need to manipulate the state