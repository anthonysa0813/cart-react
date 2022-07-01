import React, { useState } from "react";

const CounterProduct = ({ price }) => {
  const [priceTotal, setPriceTotal] = useState(price);
  console.log(priceTotal);
  return (
    <div className="counterProduct ">
      <div className="counterContainer">
        <div className="minusAction counterItem">
          <span>-</span>
        </div>
        <div className="counterNum counterItem">
          <span>2</span>
        </div>
        <div className="plusAction counterItem">
          <span>+</span>
        </div>
      </div>
      <div className="totalContainer">
        <p>
          Total Price:
          <span className="price">${priceTotal ? priceTotal : 0}</span>
        </p>
      </div>
    </div>
  );
};

export default CounterProduct;
