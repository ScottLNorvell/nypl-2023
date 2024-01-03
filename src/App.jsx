import React, { useEffect, useMemo, useRef, useState } from "react";
import Fuse from 'fuse.js';
import { data } from './data';
import { BooksGrid } from "./BooksGrid";
import { getComics, hooplaLink, madisonLibEbookLink, madisonLibrary, readComics, westchesterEbooks } from "./util";

const fuse = new Fuse(data, { keys: ['title', 'author']})

export default () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalBook, setModalBook] = useState(data[0]);
  const dialog = useRef();

  const filteredBooks = useMemo(() => {
    if (!searchTerm) return data;
    return fuse.search(searchTerm).map(({item}) => item);
  }, [searchTerm])

  const showModal = (book) => {
    setModalBook(book);
    dialog.current.showModal();
  }

  const closeModal = () => dialog.current.close();

  return (
    <div>
      <div className="input">
        <label htmlFor="filter">Search: </label>
        <input id="filter" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      </div>
      <BooksGrid books={filteredBooks} showModal={showModal} />
      <dialog className="modal" ref={dialog}>
        <button onClick={closeModal}>✖</button>
        <div>
          <h3>{modalBook.title}</h3>
          <img src={modalBook.img} />
          <h4>Links:</h4>
          <ul>
            <li><a href={hooplaLink(modalBook)} target="_blank" rel="noopener noreferrer">HOOPLA</a></li>
            <li><a href={madisonLibEbookLink(modalBook)} target="_blank" rel="noopener noreferrer">Madison Library (ebooks)</a></li>
            <li><a href={westchesterEbooks(modalBook)} target="_blank" rel="noopener noreferrer">Westchester Library (ebooks)</a></li>
            <li><a href={madisonLibrary(modalBook)} target="_blank" rel="noopener noreferrer">Madison Library (ebooks)</a></li>
            <li><a href={getComics(modalBook)} target="_blank" rel="noopener noreferrer">GetComics</a></li>
            <li><a href={readComics(modalBook)} target="_blank" rel="noopener noreferrer">ReadComicsOnline</a></li>
          </ul>
        </div>
      </dialog>
    </div>
  )
};
