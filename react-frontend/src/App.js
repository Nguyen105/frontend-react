import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddBook from "./components/add-book.component";
import Book from "./components/book.component";
import BooksList from "./components/books-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">         
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/books"} className="nav-link">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Book
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<BooksList/>} />
            <Route path="/books" element={<BooksList/>} />
            <Route path="/add" element={<AddBook/>} />
            <Route path="/books/:id" element={<Book/>} />
          </Routes>
        </div>
      </div>
    );
  }
}
export default App;
