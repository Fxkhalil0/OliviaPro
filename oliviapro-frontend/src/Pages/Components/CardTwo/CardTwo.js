import React from "react";
import style from './CardTwo.module.css'
import Card1 from '../../../assets/home/OliviaPro-Yoga03-1.jpg'
import Card2 from '../../../assets/home/OliviaPro-Yoga12-copy-980x980.jpg'
import Card3 from '../../../assets/home/OliviaPro-Yoga15-1-980x980.jpg'



function CardTwo() {
    return (
        <>
            <div className={style["cards"]}>
                <div className={style["card__box"]}>
                    <div className={style["img__container"]}>
                        <img src={Card1} />
                    </div>
                    <div className={style["card__content"]}>
                        <p>Fitness</p>
                        <h2>Sample post without sidebar</h2>
                        <p>OCT 21 2020 / / 0 COMMENTS</p>
                        <button>Read More <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className={style["card__box"]}>
                    <div className={style["img__container"]}>
                        <img src={Card2} />
                    </div>
                    <div className={style["card__content"]}>
                        <p>Beauty , Minset</p>
                        <h2>Sample post with threaded comments</h2>
                        <p>OCT 21 2020 / / 0 COMMENTS</p>
                        <button>Read More <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className={style["card__box"]}>
                    <div className={style["img__container"]}>
                        <img src={Card3} />
                    </div>
                    <div className={style["card__content"]}>
                        <p>Recipes</p>
                        <h2>Sample post with image centered</h2>
                        <p>OCT 21 2020 / / 0 COMMENTS</p>
                        <button>Read More <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardTwo;