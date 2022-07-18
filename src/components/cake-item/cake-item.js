import React from "react";
import "./cake-item.css";
import { CakeCover } from "../cake-cover";
import { CakeBuy} from "../cake-buy";
import { CakeGenre} from "../cake-genre";

export const CakeItem = ({ cake }) => {
  return (
    <div className="cake-item">
          <CakeCover image={cake.image} />
      <div className="cake-item__details">
        <span className="cake-item__title">{cake.title}</span>
        <div className="cake-item__genre">
            {cake.genres.map(genre=>< CakeGenre genre={genre} key={genre}/>)}
        </div>
        <div className='cake-item__buy'>
            <CakeBuy cake={cake}/>
        </div>
      </div>
    </div>
  );
};
