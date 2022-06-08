import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Logo, SearchIcon, LikeIcon, BuyIcon, BurgerBtn, ExitBtn } from "../../assets/icons/icons";

import "./Header.scss";

const Header = () => {

	const [ state, setState ] = useState(false);	

	return (
		<div className="Header flex items-center justify-between">
			<Link className="" to="/"><Logo fill="#4D2900" /></Link>
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
					<option className="Header-option" value="">2 228 грн.</option>ч
					<option className="Header-option" value="">3 831 грн.</option>
					<option className="Header-option" value="">4 876 грн.</option>
					<option className="Header-option" value="">5 863 грн.</option>
					<option className="Header-option" value="">6 956 грн.</option>
				</select>
			</div>
			
			<div className="w-[4%]">
				{
					state ? <ExitBtn className="exitBtn" onclick={() => setState(false)} />
					: <BurgerBtn className="burgerBtn" onclick={() => setState(true)} />
				}
			</div>

			{
				state ? (
					<div className="modal">
						<ul className="Header-links">
							<li><Link className="link" to="/">Акции</Link></li>
							<li><Link className="link" to="/">Каталог</Link></li>
							<li><Link className="link" to="/">Доставка</Link></li>
							<li><Link className="link" to="/">О магазине</Link></li>
							<li><Link className="link" to="/">Блог</Link></li>
						</ul>
					</div>
				) : undefined
			}
		</div>
	)
	}

export default Header;