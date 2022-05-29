import React from 'react';
import { Link } from "react-router-dom";
import { LikeIcon } from "../../assets/icons/icons";

import "./Card.scss";

const Card = ({path, img, price, title, author}) => {
    return (
        <Link to={path} className="Card">
            <img src={img} alt="" className="Card-img" />
            <h4 className="Card-price">{price}</h4>
            <span className="Card-title">{title}</span>
            <span className="Card-author">{author}</span>

            <div className="flex items-center justify-between">
                <button className="Card-btn btnDefault">В корзину</button>
                <LikeIcon styles="cursor-pointer" />
            </div>
        </Link>
    );
};

export default Card;