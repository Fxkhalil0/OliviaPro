import React from "react";
import style from './Cards.module.css'
import Card1 from '../../../assets/home/OliviaPro-Yoga03-1.jpg'
import Card2 from '../../../assets/home/OliviaPro-Hero02-1.jpg'
import Card3 from '../../../assets/home/OliviaPro-Yoga05-1.jpg'


function Cards() {
    return (
        <>
            <div className={style["cards"]}>
                <div className={style["card__box"]}>
                    <img src={Card1} />
                    <div className={style["card__icon"]}>
                        <i class="fa-regular fa-file-lines"></i>
                    </div>
                    <div className={style["card__content"]}>
                        <h2>Free FB Group</h2>
                        <p>In dignissim ante iaculis turpis venenatis, ut bibendum ante molestie.
                            Vestibulum quis risus eget neque venenatis vestibulum ut ut velit.
                            Vestibulum quis risus eget neque venenatis vestibulum ut ut velit.</p>
                            <a>Read More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className={style["card__box"]}>
                    <img src={Card2} />
                    <div className={style["card__icon"]}>
                    <i class="fa-solid fa-mug-hot"></i>
                    </div>
                    <div className={style["card__content"]}>
                        <h2>1:1 Coaching</h2>
                        <p>In dignissim ante iaculis turpis venenatis, ut bibendum ante molestie.
                            Vestibulum quis risus eget neque venenatis vestibulum ut ut velit.
                            Vestibulum quis risus eget neque venenatis vestibulum ut ut velit.</p>
                            <a>Read More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className={style["card__box"]}>
                    <img src={Card3} />
                    <div className={style["card__icon"]}>
                    <i class="fa-regular fa-pen-to-square"></i>
                    </div>
                    <div className={style["card__content"]}>
                        <h2>Group Coaching</h2>
                        <p>In dignissim ante iaculis turpis venenatis, ut bibendum ante molestie.
                            Vestibulum quis risus eget neque venenatis vestibulum ut ut velit.
                            Vestibulum quis risus eget neque venenatis vestibulum ut ut velit.</p>
                            <a>Read More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;