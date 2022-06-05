import React from 'react';

import "./Nums.scss";

const Nums = ({ num, title }) => {
  return (
    <div className="flex items-center justify-start mr-8">
        <h3 className="Nums-num">{num}</h3>
        <span className="Nums-title">{title}</span>
        {/* {num.map(el => <h3 className="Nums-num">{el}</h3>)}
        {title.map(el => <span className="Nums-title">{el}</span>)} */}
    </div>
  )
}

export default Nums