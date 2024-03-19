import React from "react";
import style from './CardTwo.module.css'
import Card1 from '../../../assets/home/OliviaPro-Yoga03-1.jpg'
import Card2 from '../../../assets/home/OliviaPro-Yoga12-copy-980x980.jpg'
import Card3 from '../../../assets/home/OliviaPro-Yoga15-1-980x980.jpg'

function CardTwo() {
    // Array of card data
    const cardsData = [
        {
            image: Card1,
            category: "Fitness",
            title: "Sample post without sidebar",
            comments: "OCT 21 2020 // 0 COMMENTS",
        },
        {
            image: Card2,
            category: "Beauty , Minset",
            title: "Sample post with threaded comments",
            comments: "OCT 21 2020 // 0 COMMENTS",
        },
        {
            image: Card3,
            category: "Recipes",
            title: "Sample post with image centered",
            comments: "OCT 21 2020 // 0 COMMENTS",
        }
    ];

    return (
        <div className={style["cards"]}>
            {cardsData.map((card, index) => (
                <div className={style["card__box"]} key={index}>
                    <div className={style["img__container"]}>
                        <img src={card.image} alt={card.title} />
                    </div>
                    <div className={style["card__content"]}>
                        <p>{card.category}</p>
                        <h2>{card.title}</h2>
                        <p>{card.comments} </p>
                        <button>Read More <i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardTwo;
