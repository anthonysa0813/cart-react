import React from "react";

const Sizes = ({ sizes }) => {
  console.log(sizes);
  return (
    <div className="SizeContent ">
      <span>Size: </span>
      <div className="SizeGrid ">
        {sizes?.values.map((size) => {
          return (
            <div className="sizeItem">
              <p>{size}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sizes;
