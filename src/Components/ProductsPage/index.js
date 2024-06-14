import React, { useState } from "react";
import "./styles.css";
import WoodenGrayChair from "../../Images/woodengraychair.jpg";
import WoodenChairPink from "../../Images/woodenchairpink.jpg";
import WoodenChairGray from "../../Images/woodenchairgray.jpg";
import { BsCartPlus } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { ReactComponent as CheckmarkIcon } from "../../Images/checkmark.svg";
import { ReactComponent as CheckmarkIconGray } from "../../Images/checkmarkgray.svg";

const ProductPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const handleClickSelected = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="product-page">
      <main className="product-container">
        <div className="product-image">
          <div className="product-image-icon">
            <img src={WoodenChairGray} alt="Scandinavian Collection Chair" />
            <GoArrowRight className="arrow-right" />
          </div>
          <div className="thumbnail-images">
            <img src={WoodenGrayChair} alt="Thumbnail 1" />
            <img src={WoodenChairGray} alt="Thumbnail 2" />
            <img src={WoodenChairPink} alt="Thumbnail 3" />
          </div>
        </div>
        <div className="product-details">
          <h2>Kappu Regular Chair</h2>
          <h1 className="product-title">Scandinavian Collection</h1>
          <p>
            Vass Shoes makes handcrafted men's shoes in the heart of Budapest. I
            made a concept product page for practice which in my opinion
            represents their qualities better than their current site.
          </p>
          <div className="color-options">
            <span className="color-option">Color</span>

            <div className="color-picker">
              <div onClick={() => handleClick(0)}>
                {activeIndex === 0 ? (
                  <div className="checkmark-icon">
                    <CheckmarkIcon />
                  </div>
                ) : (
                  <div className="color-option black"></div>
                )}
              </div>
              <div onClick={() => handleClick(1)}>
                {activeIndex === 1 ? (
                  <div className="color-option gray"></div>
                ) : null}
              </div>
              <div onClick={() => handleClickSelected(3)}>
                {activeIndex === 3 ? (
                  <div className="checkmark-icon">
                    <CheckmarkIconGray />
                  </div>
                ) : (
                  <div className="color-option grey"></div>
                )}
              </div>
              <div onClick={() => handleClickSelected(4)}>
                {activeIndex === 4 ? (
                  <div className="color-option gray"></div>
                ) : null}
              </div>
            </div>
          </div>
          <span className="price-per-unit">Price per unit</span>
          <div className="price">
            <h2>$2,600</h2>
            <button className="buy-now-button">Buy Now</button>
            <BsCartPlus />
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>You might also like</p>
      </footer>
    </div>
  );
};

export default ProductPage;
