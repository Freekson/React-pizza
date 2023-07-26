import React, { useState } from "react";

export default function PizzaBlock({ title, price, imageUrl, sizes, types }) {
  const pizzaTypes = ["thin", "traditional"];

  const [pizzaCount, setPizzaCount] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const onClickAdd = () => {
    setPizzaCount(pizzaCount + 1);
  };

  return (
    <div className="pizza__item">
      <img src={imageUrl} alt="pizza" className="pizza__img" />
      <p className="pizza__header">{title}</p>
      <div className="kind-section">
        <div className="kind">
          {types.map((obj, index) => {
            return (
              <div
                key={index}
                className={activeType === index ? "kind-active" : ""}
                onClick={() => {
                  setActiveType(index);
                }}
              >
                {pizzaTypes[obj]}
              </div>
            );
          })}
        </div>
        <div className="size">
          {sizes.map((obj, index) => {
            return (
              <div
                key={index}
                className={activeSize === index ? "size-active" : ""}
                onClick={() => {
                  setActiveSize(index);
                }}
              >
                {obj} cm.
              </div>
            );
          })}
        </div>
      </div>
      <div className="price-section">
        <p className="pizza-price">from {price} $</p>
        <button
          className={pizzaCount > 0 ? "btn active-btn" : "btn"}
          onClick={onClickAdd}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#fff"
            />
          </svg>
          <p>Add</p>
          {pizzaCount > 0 ? <span className="amount">{pizzaCount}</span> : ""}
        </button>
      </div>
    </div>
  );
}
