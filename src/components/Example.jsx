import React, { useEffect, useState } from "react";

const Example = () => {
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState(false);
  const [product, setProduct] = useState("");
  const data = [
    {
      id: "agfdvbana",
      nombre: "laptop lenovo",
      price: 100,
    },
    {
      id: "agfdvbana",
      nombre: "xiaomi 11",
      price: 150,
    },
    {
      id: "agfdvbana",
      nombre: "iphone pro 10",
      price: 300,
    },
  ];

  const searchValue = () => {
    const arrFilter = data.filter(
      (item) => item.nombre.slice(0, 3) == inputValue.slice(0, 3)
    );
    console.log(arrFilter);
    setProduct(arrFilter[0]);
  };

  // este useEffect solo se va a ejecutar cuando renderizamos por primera vez
  useEffect(() => {
    if (inputValue.length > 3) {
      setActive(true);
      searchValue();
    } else {
      setActive(false);
    }
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      Example
      <input type="text" onChange={handleChange} />
      {active ? <h1>{product.nombre}</h1> : null}
    </div>
  );
};

export default Example;
