import React from 'react';

import "./BtnCategory.scss";

const BtnCategory = ({ title }) => title.map(el => <button className="BtnCategory">{el}</button>)

export default BtnCategory;