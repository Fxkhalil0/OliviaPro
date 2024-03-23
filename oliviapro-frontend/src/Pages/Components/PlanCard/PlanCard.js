import React from "react";
import style from './PlanCard.module.css'
import Card1 from '../../../assets/about/leaves.png'
import Card2 from '../../../assets/about/fruit-juice.png'
import Card3 from '../../../assets/about/heart-rate.png'

function PlanCard() {
    // Define an array of objects containing card details
    const cards = [
        {
            image: Card1,
            title: "1:1 Personalized Coaching To Help Get You Back On Track",
            description: "Subway tile affogato flannel disrupt, wolf forage poutine godard intelligentsia +1 farm-to-table man braid authentic tattooed drinking vinegar"
        },
        {
            image: Card2,
            title: "Personalized Meal Plans & Recipes You'll Love",
            description: "Subway tile affogato flannel disrupt, wolf forage poutine godard intelligentsia +1 farm-to-table man braid authentic tattooed drinking vinegar"
        },
        {
            image: Card3,
            title: "Group Coaching: Strengths and Challenges",
            description: "Subway tile affogato flannel disrupt, wolf forage poutine godard intelligentsia +1 farm-to-table man braid authentic tattooed drinking vinegar"
        }
    ];

    return (
        <>
            <div className={style["cards"]}>
                {cards.map((card, index) => (
                    <div key={index} className={style["card__box"]}>
                        <div className={style["card__content"]}>
                            <figure>
                                <img src={card.image} alt="" />
                            </figure>
                            <h4>{card.title}</h4>
                            <p>{card.description}</p>
                        </div>
                        <div className={style["blue__square"]}></div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default PlanCard;
