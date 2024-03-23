import React from "react";
import style from './About.module.css'
import Navbar from "../Components/Navbar/Navbar";
import Brand from '../../assets/about/Oliviapro-Yoga31-1.jpg'
import Salad from '../../assets/about/OliviaPro-Yoga11-1.jpg'
import Olivia from '../../assets/about/OliviaPro-Yoga22-copy-2.jpg'
import Icon from '../../assets/about/png.png'
import PlanCard from "../Components/PlanCard/PlanCard";
import SecImg from "../../assets/about/OliviaPro-Yoga09-1.jpg";
import ThirdImg from "../../assets/about/OliviaPro-Hero02-1.jpg";
import Footer from "../Components/Footer/Footer";

function About() {
    const favorites = [
        { id: 1, text: "I love eating rice" },
        { id: 2, text: "I have 3 lovely cats" },
        { id: 3, text: "I'm obsessed with house plants" },
        { id: 4, text: "My guilty pleasure is dancing like no one's watching" },
        { id: 5, text: "My favorite drink is now the alkaline water" },
        { id: 6, text: "I can´t live without expresso" },
    ];
    return (
        <>
            <Navbar />
            <div className={style["brand__sec"]}>
                <div className={style["left__div"]}>
                </div>
                <div className={style["right__div"]}>
                    <div className={style["div__content"]}>
                        <p>FOOD + HEALTH + WELLNESS</p>
                        <h2>Hey there, I´m Olivia and and I want to help you get there</h2>
                        <p className={style["first__line"]}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                        <p>Cu omnium propriae mel. Eum detracto suscipit ut, et vix splendide scriptorem. His exerci integre moderatius et, ea vis zril choro deseruisse. Ea qui omnesque mnesarchum liberavisse. Ei mei unum lorem, te nam velit philosophia et vix splendide ispum.</p>
                        <p>Cu omnium propriae mel. Eum detracto suscipit ut, et vix splendide scriptorem. His exerci integre moderatius et, ea vis zril choro deseruisse. Ea qui omnesque mnesarchum liberavisse. Ei mei unum lorem, te nam velit philosophia et vix splendide ispum.</p>
                        <button>My Services</button>
                    </div>
                </div>
                <img src={Brand} alt="" />
            </div>
            <div className={style["story__sec"]}>
                <div className="container">
                    <div className={style["story__content"]}>
                        <p>MY STORY</p>
                        <h2>Minset & business coach for ambitious woman</h2>
                        <div className={style["my__story"]}>
                            <div className={style["left__side"]}>
                                <p>Caramels apple pie liquorice cheesecake biscuit jelly-o cupcake.
                                    Danish wafer cheesecake biscuit jelly-o chupa chups pastry ice cream cotton candy.
                                    Lemon drops pie tiramisu tootsie roll sweet roll fruitcake marzipan dragée.
                                    Pastry cookie gummies pie dragée jujubes marshmallow. Dragée powder gingerbread jujubes tart.
                                    Cheesecake cookie carrot cake.
                                    Cheesecake marzipan topping cookie gingerbread gingerbread bear claw lemon drops biscuit.</p>
                                <p>Gingerbread sweet roll fruitcake chocolate bar. Marzipan chocolate bar pudding wafer tart tart.
                                    Sesame snaps caramels liquorice dragée jujubes. Donut halvah pastry.
                                    Halvah jujubes caramels macaroon gingerbread lollipop.
                                    Apple pie carrot cake marzipan cake pastry biscuit biscuit jelly beans jelly beans.
                                    Apple pie powder chocolate cake bonbon.</p>
                            </div>
                            <div className={style["right__side"]}>
                                <p>Caramels apple pie liquorice cheesecake biscuit jelly-o cupcake.
                                    Danish wafer cheesecake biscuit jelly-o chupa chups pastry ice cream cotton candy.
                                    Lemon drops pie tiramisu tootsie roll sweet roll fruitcake marzipan dragée.
                                    Pastry cookie gummies pie dragée jujubes marshmallow. Dragée powder gingerbread jujubes tart.
                                    Cheesecake cookie carrot cake.
                                    Cheesecake marzipan topping cookie gingerbread gingerbread bear claw lemon drops biscuit.</p>
                                <p>Gingerbread sweet roll fruitcake chocolate bar. Marzipan chocolate bar pudding wafer tart tart.
                                    Sesame snaps caramels liquorice dragée jujubes. Donut halvah pastry.
                                    Halvah jujubes caramels macaroon gingerbread lollipop.
                                    Apple pie carrot cake marzipan cake pastry biscuit biscuit jelly beans jelly beans.
                                    Apple pie powder chocolate cake bonbon.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style["my__faves"]}>
                <div className="container">
                    <div className={style["my__faves__content"]}>
                        <div className={style["my__fav__left"]}>
                            <h2>Some of my faves</h2>
                            <img src={Salad} alt="" />
                            <img src={Olivia} alt="" />

                        </div>
                        <div className={style["my__fav__right"]}>
                        {favorites.map(favorite => (
                            <div key={favorite.id} className={style["faves__list"]}>
                                <img src={Icon} alt="" />
                                <p>{favorite.text}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style["plan__sec"]}>
                <div className="container">
                    <div className={style["plan__content"]}>
                        <p>WORK WITH ME</p>
                        <h2>See what plan is the best for you</h2>
                        <PlanCard />
                    </div>
                </div>
            </div>
            <div className={style["are__u__ready"]}>
                <div className={style["ready__content"]}>
                    <h2>ARE YOU READY TO WORK TOGETHER ?</h2>
                    <p>Feeling my vibe? Schedule a free call and tell me more about you</p>
                    <button>INQUIRE FOR MORE DETAILS</button>
                </div>
            </div>
            <div className={style["the__next"]}>
                <div className="container">
                    <div className={style["the__next__content"]}>
                        <div className={style["first__div"]}>
                            <h2>Where is the next?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                                Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                        </div>
                        <div className={style["sec__div"]}>
                            <img src={SecImg} alt="" />
                            <p>The latest post</p>
                        </div>
                        <div className={style["sec__div"]}>
                            <img src={ThirdImg} alt="" />
                            <p>The latest post</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;