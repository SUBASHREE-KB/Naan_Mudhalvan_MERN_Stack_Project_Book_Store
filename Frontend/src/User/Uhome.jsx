import React, { useState } from "react";
import Unavbar from "./Unavbar";
import "./uhome.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Footer from "../Componenets/Footer";

const Uhome = () => {
  const [books, setBooks] = useState([]);
  return (
    <div
      className="home-container"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/564x/cf/8a/4f/cf8a4f7d36537e23f94bf01661b8cd09.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Unavbar />

      <div className="container" style={{ flex: 1, padding: "20px" }}>
        <div>
          <SearchBar setBooks={setBooks} />
          <div className="container mx-auto p-8">
            {books.length > 0 && (
              <>
                <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
                  Search Results
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {books.map((book) => (
                    <div
                      key={book._id}
                      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                    >
                      <div className="w-full h-60 flex justify-center items-center bg-gray-200 rounded-t-lg">
                        <img
                          src={`http://localhost:4000/${book.itemImage}`}
                          alt={book.title}
                          className="object-contain w-full h-full rounded-t-lg"
                        />
                      </div>
                      <div className="text-center mt-4">
                        <p className="text-xl font-semibold text-gray-800 mb-2">
                          {book.title}
                        </p>
                        <p className="text-gray-600 mb-2">
                          <strong>Author:</strong> {book.author || "Unknown"}
                        </p>
                        <p className="text-gray-600 mb-2">
                          <strong>Genre:</strong> {book.genre || "Unknown"}
                        </p>
                        <div className="mt-4">
                          <Link to={`/uitem/${book._id}`}>
                            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <h1
          className="text-center mb-4"
          style={{ fontSize: "40px", color: "#333333", fontWeight: "bold" }}
        >
          Best Sellers
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* First Card */}
          <Card className="product-card">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://www.sperling.it/content/uploads/2021/06/978882007130HIG.JPG"
              />
            </Link>
            <Card.Body>
              <Card.Title
                className="text-center"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                THE INHERITANCE
                <br /> GAMES{" "}
              </Card.Title>
            </Card.Body>
          </Card>

          {/* Second Card */}
          <Card className="product-card">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://th.bing.com/th/id/OIP.toaO6Oxgmk1vVRrhY0EePwHaLe?rs=1&pid=ImgDetMain"
              />
            </Link>
            <Card.Body>
              <Card.Title
                className="text-center"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                A GAME OF <br /> THRONES
              </Card.Title>
            </Card.Body>
          </Card>

          {/* Third Card */}
          <Card className="product-card">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://th.bing.com/th/id/OIP.jqRJQ5mzfrM9WdpdRWmC0AHaLb?rs=1&pid=ImgDetMain"
              />
            </Link>
            <Card.Body>
              <Card.Title
                className="text-center"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                DIARY OF <br /> A WIMPY KID
              </Card.Title>
            </Card.Body>
          </Card>

          {/* Fourth Card */}
          <Card className="product-card">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://imgv2-1-f.scribdassets.com/img/word_document/251891517/original/41c439d8f6/1626299276?v=1"
              />
            </Link>
            <Card.Body>
              <Card.Title
                className="text-center"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                GREAT EXPECTATIONS
              </Card.Title>
            </Card.Body>
          </Card>
        </div>

        <br />

        <h1
          className="text-center mb-4"
          style={{ fontSize: "40px", color: "#333333", fontWeight: "bold" }}
        >
          Top Recommendations
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Fifth Card */}
          <Card className="product-card">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663805647i/136251.jpg"
              />
            </Link>
            <Card.Body>
              <Card.Title
                className="text-center"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                HARRY POTTER
              </Card.Title>
            </Card.Body>
          </Card>

          {/* Sixth Card */}
          <Card className="product-card">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://th.bing.com/th/id/OIP.K48dQmDvKrj6RhrNtzkWgQHaLL?rs=1&pid=ImgDetMain"
              />
            </Link>
            <Card.Body>
              <Card.Title
                className="text-center"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                ATOMIC HABITS
              </Card.Title>
            </Card.Body>
          </Card>

          {/* Seventh Card */}
          <Card className="product-card">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://www.thoughtco.com/thmb/SuveYjmc-r0wMBYj4QOea0cE7D0=/1488x2338/filters:fill(auto,1)/Twilight_book_cover-589fa4625f9b58819cb2e790.jpg"
              />
            </Link>
            <Card.Body>
              <Card.Title
                className="text-center"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                TWILIGHT
              </Card.Title>
            </Card.Body>
          </Card>

          {/* Eighth Card */}
          <Card className="product-card">
            <Link to="/uproducts">
              <Card.Img
                variant="top"
                src="https://i.thenile.io/r1000/9780486412351.jpg?r=5e9c2050b1a5c"
              />
            </Link>
            <Card.Body>
              <Card.Title
                className="text-center"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                HEIDI
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Uhome;
