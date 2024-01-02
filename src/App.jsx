import React, { useEffect, useMemo, useState } from "react";
import Fuse from 'fuse.js';
import { data } from './data';
import { BooksGrid } from "./BooksGrid";

const fuse = new Fuse(data, { keys: ['title', 'author']})

export default () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = useMemo(() => {
    if (!searchTerm) return data;
    return fuse.search(searchTerm).map(({item}) => item);
  }, [searchTerm])

  return (
    <div>
      <div>
        <label htmlFor="filter">Search for a book: </label>
        <input id="filter" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      </div>
      <BooksGrid books={filteredBooks} />
    </div>
  )
};
