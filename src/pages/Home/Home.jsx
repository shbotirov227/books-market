import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slider from "react-slick";

import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import Card from "../../components/Card/Card";
import Img1 from "../../assets/images/img1.png";
import { ArrowRight, LeftArrow, RightArrow } from "../../assets/icons/icons";
import data from "./data.js";

import "./Home.scss";

const Home = () => {

    var settings = {
        dots: true,
        infinite: false,
        centerPadding: "100px",
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow: <LeftArrow />,
		nextArrow: <RightArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
      };

    return (
        <div className="Home container">
            <Header />

            <div className="imgSection flex items-center justify-between">
                <div className="imgSection-left">
                    <h3 className="imgSection-left-title">Киниги от  А до Я</h3>
                    <p className="imgSection-left-text">В нашем магазине можно найти книгу на любой вкус.<br></br> Большой ассортимент. Приятные цены. Интересные<br></br> сюжеты.</p>
                    <button className="imgSection-left-btn btnDefault">Перейти в каталог</button>
                </div>

                <div className="imgSection-right">
                    <Swiper spaceBetween={50}  slidesPerView={1} className="carousel" keyboard>
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
                        {data.map(el => <Card key={el.id} path={el.path} img={el.img} price={el.price} title={el.title} author={el.author}/>)}
                    </div>
                </div>

                <div className="sales">
                    <h3 className="titleDefault mb-14">Распродажа</h3>
                    
                    <div className="flex items-center justify-between mb-16">
                        <Slider {...settings} className="container">
                            {data.map(el => <Card key={el.id} path={el.path} img={el.img} salePrice={el.salePrice} price={el.price} title={el.title} author={el.author}/>)}
                        </Slider>
                    </div>
                </div>

            <Footer />
        </div>        
    );
};

export default Home;