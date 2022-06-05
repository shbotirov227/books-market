import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from "../../assets/icons/icons";
import FooterLinks from '../../components/FooterLinks/FooterLinks';

import "./Footer.scss";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="container">
				<div className="Footer-inner flex items-center justify-between mb-14">
					<Link to="/"><Logo fill="#FFFFFF" /></Link>
					
					<div className="flex items-start justify-between w-3/6">
						<FooterLinks title="Популярное" link={["Программирование", "Книги для детей", "Психология", "Бизнес"]} />
						<FooterLinks title="Информация" link={["Доставка", "Оплата", "O магазине"]} />
						<FooterLinks title="Помощь" link={["Контакты", "Возврат товара", "Помощь покупателю"]} />
					</div>

					<div>
						<h4 className="telNumber mb-4">+38 (071) 339-16-26</h4>
						<a className="telBtn" href="tel:+38 (071) 339-16-26">Заказать звонок</a>
					</div>
				</div>

				<span className="copyright">Все права защищены © 2003-2021 БИБЛИОТЕЧНАЯ          Условия использования | Политика конфиденциальности</span>
			</div>
		</div>
	)
}

export default Footer;