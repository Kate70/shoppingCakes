import React from "react";
import { useSelector } from "react-redux";
import "./cake-page.css";
import { CakeCover } from "../../../components/cake-cover";
import { CakeGenre } from "../../../components/cake-genre";
import { CakeBuy } from "../../../components/cake-buy";

export const CakePage = () => {
  const cake = useSelector((state) => state.cake.currentCake);
  if (!cake) return null;
  return (
    <div className="cake-page">
      <h1 className="cake-page__title">{cake.title}</h1>
      <div className="cake-page__contetnt">
        <div className="cake-page__left">
          <iframe
            width="90%"
            height="400px"
            src={cake.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="cake-page__right">
          <CakeCover image={cake.image} />
          <p>{cake.description}</p>
          <p className="secondary-text">popular tegs:</p>
          {cake.genres.map((genre) => (
            <CakeGenre genre={genre} key={genre} />
          ))}
        </div>
       
      </div>
      <div className="cake-page__buy-game">
          <CakeBuy cake={cake} />
        </div>
    </div>
  );
};
