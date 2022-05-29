import React from 'react';
import { Link } from "react-router-dom";
import { Logo, SearchIcon, LikeIcon, BuyIcon } from "../../assets/icons/icons";

import "./Header.scss";

const Header = () => {
	return (
		<div className="Header flex items-center justify-between">
			<Link className="" to="/"><Logo /></Link>
				<ul className="Header-links flex">
					<li><Link className="link" to="/">Акции</Link></li>
					<li><Link className="link" to="/">Каталог</Link></li>
					<li><Link className="link" to="/">Доставка</Link></li>
					<li><Link className="link" to="/">О магазине</Link></li>
					<li><Link className="link" to="/">Блог</Link></li>
				</ul>
			<div className="Header-inputSection flex items-center justify-between relative">
				<SearchIcon styles="Header-iconSearch" />
				<input className="Header-input" type="text" placeholder="Поиск"/>
			</div>

			<div className="flex items-center justify-between">
				<LikeIcon styles="mr-4 cursor-pointer" />
				<BuyIcon styles="mr-5 cursor-pointer" />
				<select name="" id="" className="Header-select">
					<option className="Header-option" value="">2 228 грн.</option>
					<option className="Header-option" value="">3 831 грн.</option>
					<option className="Header-option" value="">4 876 грн.</option>
					<option className="Header-option" value="">5 863 грн.</option>
					<option className="Header-option" value="">6 956 грн.</option>
				</select>
			</div>
		</div>
	)
	}

export default Header;