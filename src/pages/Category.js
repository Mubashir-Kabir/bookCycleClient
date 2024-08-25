import React from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";

const Category = () => {
  const books = useLoaderData().data;
  console.log(books);

  return (
    <div>
      {books.length ? (
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 md:p-6 ">
          {books.map((book) => (
            <BookCard key={book?.bookId} book={book}></BookCard>
          ))}
        </div>
      ) : (
        <div>
          <div className="divider  divider-primary text-4xl font-semibold my-6 min-h-screen">
            No Book in this category
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
