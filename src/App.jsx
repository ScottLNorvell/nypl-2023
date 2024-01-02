import React from "react";
import { data } from './data';
import { BooksGrid } from "./BooksGrid";

export default () => {
  return <BooksGrid books={data} />
};
