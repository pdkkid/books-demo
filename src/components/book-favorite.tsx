import { useContext } from "react";
import { IBook } from "../api/base.types";
import { AppContext } from "../app-context";
export function Favorited(book: IBook) {
  const { app } = useContext(AppContext);
  return app.favBooks.includes(book) ? true : false;
}
