import React, { useEffect, useState } from "react";
import LandingBanner from "../components/LandingBanner";
import BookCard from "../components/BookCard";
import CategorySlide from "../components/CategorySlide";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/books`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App bg-white ">
      <LandingBanner></LandingBanner>
      <div className="divider divider-primary text-4xl font-semibold my-6">
        Categories
      </div>
      <div className="p-2 md:p-6">
        <CategorySlide></CategorySlide>
      </div>
      <div className="divider divider-primary text-4xl font-semibold my-6">
        Latest
      </div>

      <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 md:p-6">
        {books.map((book) => (
          <BookCard key={book?.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
