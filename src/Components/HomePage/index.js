import React from "react";
import "./styles.css";
import Blanko from "../../Images/blanko.jpeg";
import Momo from "../../Images/books.jpeg";
import Coombes from "../../Images/coombes.jpeg";
import Penemille from "../../Images/Penemille.jpeg";
import Nille from "../../Images/nilleArmchair.jpeg";
import Kappu from "../../Images/tables.jpeg";
import { BsCartPlus } from "react-icons/bs";
import { ReactComponent as ChevrondownIcon } from "../../Images/chevrondown.svg";
import Filter from "../Filter";

const products = [
  {
    id: 1,
    name: "Coombes",
    category: "LOUNGE",
    price: "$2,600",
    image: Coombes,
    rating: 5,
  },
  {
    id: 2,
    name: "Keeve Set",
    category: "TABLE & CHAIRS",
    price: "$590",
    image: Blanko,
    rating: 4,
  },
  {
    id: 3,
    name: "Nille",
    category: "ARMCHAIR",
    price: "$950",
    image: Nille,
    rating: 5,
  },
  {
    id: 4,
    name: "Blanko",
    category: "SIDE TABLE",
    price: "$90",
    image: Blanko,
    rating: 4,
  },
  {
    id: 5,
    name: "Momo",
    category: "SHELVES",
    price: "$890",
    image: Momo,
    rating: 4,
  },
  {
    id: 6,
    name: "Penemille",
    category: "CHAIR",
    price: "$120",
    image: Penemille,
    rating: 5,
  },
  {
    id: 7,
    name: "Kappu",
    category: "SHELVES",
    price: "$420",
    image: Kappu,
    rating: 5,
  },
];

const HomePage = () => {
  return (
    <div className="app">
      <main className="main-content">
        <section className="product-section">
          <aside className="filter-section">
            <p className="filter">FILTER BY</p>

            <nav role="navigation" className="primary-navigation">
              <ul className="navigation-container">
                <li className="navigation-title">
                  <div className="filter-option">
                    <a href="/Collection">Collection</a>{" "}
                    <ChevrondownIcon className="dropdown-icon" />
                  </div>
                  <ul>
                    <li className="dropdown">
                      <li> All</li>
                      <li> Lounge</li>
                      <li>Table & Chairs</li>
                      <li>Armchair</li>
                      <li>Side Table</li>
                      <li>Shelves</li>
                      <li>Chair</li>
                    </li>
                  </ul>
                </li>
                <li className="navigation-title">
                  <div className="filter-option">
                    <a href="/Color">Color </a>{" "}
                    <ChevrondownIcon className="dropdown-icon" />
                  </div>
                  <ul>
                    <li className="dropdown">
                      <li>
                        <option>All</option>
                      </li>
                      <li>
                        <option>Black</option>
                      </li>
                      <li>
                        <option>White</option>
                      </li>
                      <li>
                        <option>Grey</option>
                      </li>
                    </li>
                  </ul>
                </li>

                <li className="navigation-title">
                  <div className="filter-option">
                    <a href="/Category">Category</a>
                    <ChevrondownIcon className="dropdown-icon" />
                  </div>
                  <ul>
                    <li className="dropdown">
                      <li>All</li>
                      <li>Lounge</li>
                      <li>Table & Chairs</li>
                      <li>Armchair</li>
                      <li>Side Table</li>
                      <li>Shelves</li>
                      <li>Chair</li>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            <div className="filter-group">
              <p className="price-range">Price Range</p>
            </div>
            <Filter
              min={0}
              max={1000}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </aside>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <a href="/products">
                <img src={product.image} alt={product.name} />
              </a>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-subtitle-container">
                <div className="product-subtitle">
                  <p className="product-category">{product.category}</p>
                </div>
                <p>{product.price}</p>
              </div>
              <div className="product-desc">
                <div className="rating">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>
                <div className="product-actions">
                  <BsCartPlus />
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="pagination">
        <button className="pagination-active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
      </footer>
    </div>
  );
};

export default HomePage;
