import { useContext } from "react";
import { IBook } from "../api/base.types";
import { AppContext } from "../app-context";
export function Favorited(book: IBook) {
  const { app } = useContext(AppContext);
  return app.favBooks.includes(book) ? true : false;
}

// const BookFavorite = () => {
//   const { app, setAppState } = useContext(AppContext);
//   const { favBooks } = app;

//   const favorited = (book: IBook) => {
//     return favBooks.includes(book) ? true : false;
//   };

//   const handleAddFavBook = (book: IBook) => {
//     if (favBooks.includes(book)) {
//       console.log("already here bub.");
//       return;
//     }
//     setAppState({ ...app, favBooks: favBooks.concat(book) });
//   };

//   const handleDelFavBook = (book: IBook) => {
//     console.log(favBooks);
//     setAppState({ ...app, favBooks: favBooks.filter(n => n !== book) });
//   };

//   return { favorited, handleAddFavBook, handleDelFavBook };
// };
