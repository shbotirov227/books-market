import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import Card from "../../components/Card/Card";
import Img1 from "../../assets/images/img1.png";
import { ArrowRight, Facebook, Instagram,  Twitter, VK, YouTube } from "../../assets/icons/icons";
import data from "./data.js";

import "./Home.scss";
import { Keyboard } from "swiper";
import BtnCategory from "../../components/BtnCategory/BtnCategory";
import Nums from "../../components/Nums/Nums";

const Home = () => {
    return (
        <div className="Home">
            <div className="container">
                <Header />
                <div className="imgSection flex items-center justify-between">
                    <div className="imgSection-left">
                        <h3 className="imgSection-left-title">Киниги от  А до Я</h3>
                        <p className="imgSection-left-text">В нашем магазине можно найти книгу на любой вкус. Большой ассортимент. Приятные цены. Интересные<br></br> сюжеты.</p>
                        <button className="imgSection-left-btn btnDefault">Перейти в каталог</button>
                    </div>

                    <div className="imgSection-right">
                        <Swiper spaceBetween={50} slidesPerView={1} className="carousel" keyboard>
                            <SwiperSlide>
                                <img className="imgSection-right-img" src={Img1} alt="" />
                                <div style={{width: "60%", float: "right"}}>
                                    <h4 className="imgSection-right-title">Комплект книг Марка Мэнсона</h4>
                                    <p className="imgSection-right-text">ТОНКОЕ ИСКУССТВО ПОФИГИЗМА.<br></br> ВСЕ ХРЕНОВО. МУЖСКИЕ ПРАВИЛА.</p>
                                    
                                    <div className="flex items-center justify-start">
                                        <span className="imgSection-right-price mr-48">649 грн.</span>
                                        <button><ArrowRight /></button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <img className="imgSection-right-img" src={Img1} alt="" />
                                <div style={{width: "60%", float: "right"}}>
                                    <h4 className="imgSection-right-title">Комплект книг Марка Мэнсона</h4>
                                    <p className="imgSection-right-text">ТОНКОЕ ИСКУССТВО ПОФИГИЗМА.<br></br> ВСЕ ХРЕНОВО. МУЖСКИЕ ПРАВИЛА.</p>
                                    
                                    <div className="flex items-center justify-start">
                                        <span className="imgSection-right-price mr-48">649 грн.</span>
                                        <button><ArrowRight /></button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <img className="imgSection-right-img" src={Img1} alt="" />
                                <div style={{width: "60%", float: "right"}}>
                                    <h4 className="imgSection-right-title">Комплект книг Марка Мэнсона</h4>
                                    <p className="imgSection-right-text">ТОНКОЕ ИСКУССТВО ПОФИГИЗМА.<br></br> ВСЕ ХРЕНОВО. МУЖСКИЕ ПРАВИЛА.</p>
                                    
                                    <div className="flex items-center justify-start">
                                        <span className="imgSection-right-price mr-48">649 грн.</span>
                                        <button><ArrowRight /></button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <img className="imgSection-right-img" src={Img1} alt="" />
                                <div style={{width: "60%", float: "right"}}>
                                    <h4 className="imgSection-right-title">Комплект книг Марка Мэнсона</h4>
                                    <p className="imgSection-right-text">ТОНКОЕ ИСКУССТВО ПОФИГИЗМА.<br></br> ВСЕ ХРЕНОВО. МУЖСКИЕ ПРАВИЛА.</p>
                                    
                                    <div className="flex items-center justify-start">
                                        <span className="imgSection-right-price mr-48">649 грн.</span>
                                        <button><ArrowRight /></button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="cardSection">
                    <div className="flex items-center mb-14">
                        <h3 className="cardSection-title">Горячие поступления</h3>
                        <ul className="flex items-center justify-between">
                            <li><button className="cardSection-btn">Фантастика</button></li>
                            <li><button className="cardSection-btn">Саморазвитие</button></li>
                            <li><button className="cardSection-btn">Детективы</button></li>
                            <li><button className="cardSection-btn">Детские</button></li>
                            <li><button className="cardSection-btn">Аудиокниги</button></li>
                            <li><button className="cardSection-btn">Другие</button></li>
                        </ul>
                    </div>

                    <div className="flex items-start justify-between mb-16">
                    {/* <button className="spiwer" onClick={() => swiper.slidePrev()}><LeftArrow /></button> */}
                        <Swiper
                            breakpoints={{
                                320: { width: 320, slidesPerView: 2, },
                                400: { width: 400, slidesPerView: 2, },
                                640: { width: 640, slidesPerView: 3, },
                                768: { width: 768, slidesPerView: 3, },
                            }}
                            spaceBetween={10}
                            className="mySwiper pb-14"
                            slidesPerView={5.9}
                            keyboard={{ enabled: true }}
                            modules={[Keyboard]}
                        >
                            {data.map(el => <SwiperSlide><Card key={el.id} path={el.path} img={el.img} price={el.price} title={el.title} author={el.author}/></SwiperSlide>)}
                        </Swiper>
                    {/* <button className="spiwer" onClick={() => swiper.slideNext()}><RightArrow /></button> */}
                    </div>
                </div>

                <div className="sales">
                    <h3 className="titleDefault mb-14">Распродажа</h3>
                    
                    <div className="flex items-center justify-between mb-16">
                        <Swiper
                            breakpoints={{
                                320: { width: 320, slidesPerView: 2, },
                                400: { width: 400, slidesPerView: 2, },
                                640: { width: 640, slidesPerView: 3, },
                                768: { width: 768, slidesPerView: 3, },
                            }}
                            spaceBetween={10}
                            className="pb-14"
                            slidesPerView={5.9}
                            keyboard
                        >
                            {data.map(el => <SwiperSlide><Card key={el.id} path={el.path} img={el.img} salePrice={el.salePrice} price={el.price} title={el.title} author={el.author}/></SwiperSlide>)}
                        </Swiper>
                    </div>
                </div>


                <div>
                    <h3 className="titleDefault mb-14">Каталог</h3>
                    <div className="btnCategorySection flex items-center justify-center relative m-auto flex-wrap max-w-4xl mb-20">
                        <BtnCategory title={[
                            "Книги",
                            "Электронные книги",
                            "Аудиокниги",
                            "Игрушки, творчество",
                            "Книжные аксессуарые",
                            "Блокноты",
                            "Настольные игрые",
                            "Подарки",
                            "Акции",
                        ]} />
                    </div>
                </div>

                <div>
                    <h3 className="titleDefault mb-14">О магазине</h3>
                    <div className="numsSection flex items-center justify-between mb-20">
                        <Nums num="35" title="Филиалов по всей стране" />
                        <Nums num="898" title="Товаров в каталоге" />
                        <Nums num="8659" title="Покупателей" />
                        <Nums num="72" title="Часоа доставка по городам" />
                    </div>
                </div>

                <div>
                    <h3 className="titleDefault mb-14">Доставка</h3>
                    <p className="text-center mb-3">
                        Работаем без праздников и выходных! Жители Киева могут получить
                        заказ уже в день его оформления. Клиенты из других городов Украины
                        могут получить заказ в течение 1-5 дней в зависимости от местонахождения населенного
                        пункта и выбранного способа доставки. Заказы на сумму свыше 1000 грн доставляются
                        бесплатно*. Доступные способы, точные сроки и стоимость доставки Вы можете увидеть во
                        время оформления заказа в корзине заказа, после выбора города доставки.
                    </p>
                    <button className="flex items-center justify-center m-auto font-bold text-center mb-24">Подробнее</button>
                </div>

                <div className="flex items-center justify-between flex-col mb-20">
                    <h3 className="titleDefault mb-14">Следите за нами в социальных сетях</h3>
                    <div className="flex items-center justify-between max-w-sm">
                        <a href="https://www.facebook.com" rel="noreferrer" target="_blank"><Facebook /></a>
                        <a href="https://www.twitter.com" rel="noreferrer" target="_blank"><Twitter /></a>
                        <a href="https://www.vkontakte.com" rel="noreferrer" target="_blank"><VK /></a>
                        <a href="https://www.instagram.com" rel="noreferrer" target="_blank"><Instagram /></a>
                        <a href="https://www.youtube.com" rel="noreferrer" target="_blank"><YouTube /></a>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>        
    );
};

export default Home;