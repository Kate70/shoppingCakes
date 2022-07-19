import React from "react";
import {useNavigate} from "react-router-dom"
import "./cake-item.css";
import { useDispatch } from "react-redux";
import { CakeCover } from "../cake-cover";
import { CakeBuy} from "../cake-buy";
import { CakeGenre} from "../cake-genre";
import { setCurrenCake } from "../../redux/cakes/reducer";

export const CakeItem = ({ cake }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleClick=() =>{
dispatch(setCurrenCake(cake))
navigate(`/app/${cake.title}`)
  }
  return (
    <div className="cake-item" onClick={handleClick}>
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
