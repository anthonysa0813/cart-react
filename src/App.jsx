import React, { useEffect, useState } from "react";
import { getFetch } from "./helpers/getFetch";
import Slider from "react-slick";
import "../Styles/App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataColor } from "./helpers/colors";
import Sizes from "./components/Sizes";
import CounterProduct from "./components/CounterProduct";
import Button from "./components/Button";

const App = () => {
  const [imagesArr, setImagesArr] = useState({
    media: [],
    title: "",
    options: [],
    price_max: "",
    price_min: "",
    colorActive: "",
  });
  const [active, setActive] = useState(false);

  useEffect(() => {
    getFetch(
      `https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js`
    ).then((res) => {
      console.log(res);
      const { media, title, options, price_max, price_min } = res;
      setImagesArr({
        media,
        title,
        options,
        price_max,
        price_min,
      });

      console.log(options[0].values);
    });
  }, []);

  const { title, price_max, price_min, options } = imagesArr;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="gridContainer ">
      <div className="gridImage-xl ">
        {imagesArr.media.map((image) => {
          return (
            <div className="gridImage-item " key={image.id}>
              <img src={image.src} />
            </div>
          );
        })}
      </div>
      <div className="gridImage ">
        <Slider {...settings}>
          {imagesArr.media.map((image) => {
            return (
              <div key={image.id}>
                <img src={image.src} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="gridInfo ">
        <div className="headInfo ">
          <h3 className="byProduct">By NIKE x ALYX</h3>
          <h2>{title}</h2>
          <div className="priceContent">
            <span className="mainPrice">${price_min}</span>
            <span className="secondaryPrice">${price_min}</span>
          </div>
        </div>
        <div className="colorsContent">
          <span>Color: </span>
          {options.length > 0 &&
            options[0].values.map((color) => {
              return (
                <div
                  className={`colorContainer ${color}`}
                  onClick={() => setActive(!active)}
                ></div>
              );
            })}
        </div>
        {imagesArr.price_max && (
          <>
            <Sizes sizes={options[1]} />
            <CounterProduct price={price_min} />
          </>
        )}
        <div className="buttonsActions">
          <Button content={"Add to favourite"} color="gray" />
          <Button content={"Add to favourite"} color="black" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
          reprehenderit fugiat facilis aliquid quia, laborum culpa quod porro.
          Incidunt exercitationem hic earum aspernatur. Vero voluptate, aperiam
          cupiditate non exercitationem quis eum ratione dolor expedita
          molestiae voluptatibus, porro alias asperiores at autem illo!
          Voluptates harum nostrum fugit accusantium saepe! Illo, sequi!
        </p>
      </div>
    </div>
  );
};

export default App;
