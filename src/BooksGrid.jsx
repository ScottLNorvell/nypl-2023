import React from "react";

export const BooksGrid = ({ books }) => {
  return (<ul className="spbb-grid">
    {books.map(book => (
    <li key={book.title} className="spbb-card spbb-card--grid">
        <div className="spbb-card__content">
          <div className="spbb-card__header">
            <h4
              className="spbb-card__heading"
              id="spbb-card--heading--15707"
              lang="en"
            >
              {book.title}
            </h4>
            <div className="spbb-card__byline">
              By {book.author}
            </div>
          </div>
          <div
            className="spbb-card__description"
            lang="en"
          >
            <p>{book.description}</p>
          </div>
        </div>
        <div className="spbb-card__media-wrapper">
          <img
            className="spbb-card__image"
            src={book.img}
            alt={`Cover of ${book.title}`}
          />
        </div>
      </li>
  ))}
  </ul>)
};
