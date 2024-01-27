import React from 'react'

import './Videos.scss'

const Videos = () => {
    return (
        <section className="videos">
            <div className="container">
                <h2 className="videos__title"><span>Talent Q:</span> 6 шагов к успеху</h2>
                <h2 className="videos__title title-reverse"><span>Talent O:</span> 6 шагов к успеху</h2>

                <h4 className="videos__subtitle">Изучите видеоуроки</h4>

                <div className="videos__wrapper">
                    <div className="videos__item">
                        <iframe width="100%" src="https://www.youtube.com/embed/S4HOy6yTclU" title="Практика, которая сделает тебя FRONTEND разработчиком | React Crypto App" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        
                        <div className="videos__row">
                            <img src="/videos-icon-1.svg" alt="icon" />

                            <p>Удобно смотреть в любого устройства</p>
                        </div>
                    </div>

                    <div className="videos__inner">
                        <div className="videos__box">
                            <img src="/video-1.svg" alt="icon" />
                            <p>Как успевать в отведенное время?</p>
                        </div>

                        <div className="videos__box">
                            <img src="/video-1.svg" alt="icon" />
                            <p>Что читать сначала: текст или вопрос?</p>
                        </div>

                        <div className="videos__box">
                            <img src="/video-1.svg" alt="icon" />
                            <p>Как быстро находить верные ответы?</p>
                        </div>

                        <div className="videos__box">
                            <img src="/videos-icon-2.svg" alt="icon" />
                            <p>Об этом и не только расскажет <span>практикующий эксперт Антон Добрышин.</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Videos