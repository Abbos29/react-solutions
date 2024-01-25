import React from 'react'

import './Hero.scss'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__box">
                        <h1>Первая интеллектуальная платформа для подготовки к тестам <span>Talent Q</span></h1>
                        <p>от эксперта Антона Добрышина</p>

                        <div className="hero__inner">
                            <div className="hero__col col">
                                <button className="btn">
                                    Начать сейчас
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                                        <path d="M16.174 8.46095C16.8979 8.87889 16.8979 9.92374 16.174 10.3417L2.32952 18.3348C1.60563 18.7527 0.700767 18.2303 0.700767 17.3944L0.700767 1.40821C0.700767 0.572333 1.60563 0.0499098 2.32953 0.46785L16.174 8.46095Z" fill="white" />
                                    </svg>
                                </button>

                                <i>Время - деньги</i>
                            </div>

                            <div className="hero__col col">
                                <button className="btn btn-sec">
                                    Подробнее
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="10" viewBox="0 0 26 10" fill="none">
                                        <path d="M25.4243 5.42426C25.6586 5.18995 25.6586 4.81005 25.4243 4.57574L21.6059 0.757359C21.3716 0.523045 20.9917 0.523045 20.7574 0.757359C20.523 0.991674 20.523 1.37157 20.7574 1.60589L24.1515 5L20.7574 8.39411C20.523 8.62843 20.523 9.00833 20.7574 9.24264C20.9917 9.47696 21.3716 9.47696 21.6059 9.24264L25.4243 5.42426ZM0 5.6L25 5.6V4.4L0 4.4L0 5.6Z" fill="white" />
                                    </svg>
                                </button>

                                <i>Формула успеха</i>
                            </div>
                        </div>
                    </div>

                    <div className="hero__img">
                        <img src="/hero-img.png" alt="img" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero