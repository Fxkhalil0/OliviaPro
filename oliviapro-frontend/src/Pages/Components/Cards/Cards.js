import React from "react";
import style from './Cards.module.css'
import Card1 from '../../../assets/home/OliviaPro-Yoga03-1.jpg'
import Card2 from '../../../assets/home/OliviaPro-Hero02-1.jpg'
import Card3 from '../../../assets/home/OliviaPro-Yoga05-1.jpg'

const cardsData = [
    {
        image: Card1,
        icon: 'file-lines',
        title: 'Free FB Group',
        content: 'In dignissim ante iaculis turpis venenatis, ut bibendum ante molestie. Vestibulum quis risus eget neque venenatis vestibulum ut ut velit. Vestibulum quis risus eget neque venenatis vestibulum ut ut velit.',
    },
    {
        image: Card2,
        icon: 'mug-hot',
        title: '1:1 Coaching',
        content: 'In dignissim ante iaculis turpis venenatis, ut bibendum ante molestie. Vestibulum quis risus eget neque venenatis vestibulum ut ut velit. Vestibulum quis risus eget neque venenatis vestibulum ut ut velit.',
    },
    {
        image: Card3,
        icon: 'pen-to-square',
        title: 'Group Coaching',
        content: 'In dignissim ante iaculis turpis venenatis, ut bibendum ante molestie. Vestibulum quis risus eget neque venenatis vestibulum ut ut velit. Vestibulum quis risus eget neque venenatis vestibulum ut ut velit.',
    },

];

function Cards() {
    return (
        <>
            <div className={style["cards"]}>
                {cardsData.map((card, index) => (
                    <div className={style["card__box"]} key={index}>
                        <div className={style["img__container"]}>
                            <img src={card.image} alt={`Card ${index + 1}`} />
                        </div>
                        <div className={style["card__icon"]}>
                            <i className={`fas fa-${card.icon}`}></i>
                        </div>
                        <div className={style["card__content"]}>
                            <h2>{card.title}</h2>
                            <p>{card.content}</p>
                            <a href="/#">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Cards;