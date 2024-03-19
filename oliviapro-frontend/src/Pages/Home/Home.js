import React from "react";
import style from './Home.module.css'
import Navbar from "../Components/Navbar/Navbar";
import Hero from '../../assets/home/OliviaPro-Yoga02-1.jpg'
import Cards from "../Components/Cards/Cards";
import Coach from '../../assets/home/OliviaPro-Yoga06-1.jpg'
import Orange from '../../assets/home/OliviaPro-Yoga07.jpg'
import Img1 from '../../assets/home/OliviPro-Yoga18-1.jpg'
import Img2 from '../../assets/home/OliviaPro-Yoga11-1.jpg'
import Img3 from '../../assets/home/OliviaPro-Yoga17-1.jpg'
import Img4 from '../../assets/home/OliviaPro-Yoga03-1.jpg'
import Reveiws from '../../assets/home/OliviaPro-Yoga14-1.jpg'
import videoBG from '../../assets/home/Olivia Pro  Feminine Coaching Divi Child Theme.mp4'
import CardTwo from "../Components/CardTwo/CardTwo";
import Footer from "../Components/Footer/Footer";



function Home() {

    return (
        <>
            <Navbar />
            {/*--------------------Hero Section-------------------*/}
            <div className={style["hero__sec"]}>
                <div className={style["left__div"]}>
                    <div className={style["div__content"]}>
                        <p>FOOD + HEALTH + WELLNESS</p>
                        <h2>Olivia helps entrepreneurs build confidence and grow your business</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className={style["right__div"]}>
                </div>
                <img src={Hero} alt=""/>
            </div>
            {/*--------------------Work With Me Section-------------------*/}
            <div className={style["wwme__sec"]}>
                <div className="container">
                    <div className={style["sec__content"]}>
                        <p>Work With Me</p>
                        <h2>Choose your aventure</h2>
                    </div>
                    <Cards />
                </div>
            </div>
            {/*-----------------------Meet The Coach------------------ */}
            <div className={style["meet__coach"]}>
                <div className="container">
                    <div className={style["meet__content"]}>
                        <div className={style["meet__left"]}>
                            <img src={Coach} alt=""/>
                            <img src={Orange} className={style["second-image"]} alt=""/>
                        </div>
                        <div className={style["meet__right"]}>
                            <p>MEET THE COACH</p>
                            <h2>I´m Olivia, a personal and professional coach based in Madrid.</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button>My Services</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*-----------------------More Topics------------------ */}
            <div className={style["more__topics"]}>
                <p>TOPICS</p>
                <h2>Explore More</h2>
                <div className="container">
                    <div className={style["gallery"]}>
                        <div className={style["left__gallery"]}>
                            <img src={Img1} alt=""/>
                            <button>boadcast</button>
                        </div>
                        <div className={style["right__gallery"]}>
                            <img src={Orange} alt=""/>
                            <button className={style["mindest"]}>Mindest</button>

                            <img src={Img2} alt=""/>
                            <button className={style["recipes"]}>Recipes</button>

                            <img src={Img3} alt=""/>
                            <button className={style["wellness"]}>Wellness</button>

                            <img src={Img4} alt=""/>
                            <button className={style["fitness"]}>Fitness</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*-----------------------Reveiws------------------ */}
            <div className={style["reveiws"]}>
                <svg className={style["waves"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L80,112C160,96,320,64,480,90.7C640,117,800,203,960,234.7C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                <div className="container">
                    <div className={style["reveiws__content"]}>
                        <div className={style["reveiws__left"]}>
                            <p>TESTIMONIALS</p>
                            <h2>Client success stories</h2>
                            <p>Gingerbread sweet roll fruitcake chocolate bar.
                                Marzipan chocolate bar pudding wafer tart tart.
                                Sesame snaps caramels liquorice dragée jujubes. Donut halvah pastry.
                                Halvah jujubes caramels macaroon gingerbread lollipop. Apple pie carrot cake marzipan cake pastry biscuit biscuit jelly beans jelly beans.
                                Apple pie powder chocolate cake bonbon. In dignissim ante iaculis turpis venenatis, ut bibendum ante molestie.
                                Vestibulum quis risus eget neque venenatis vestibulum ut ut velit.</p>
                            <h3>Client Name</h3>
                            <div className={style["arrows"]}>
                                <i class="fas fa-arrow-left"></i>
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className={style["reveiws__right"]}>
                            <img src={Reveiws} alt=""/>
                            <img src={Img3} className={style["sec__rev"]} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            {/*-----------------------Video------------------ */}
            <div className={style["video__sec"]}>
                <video src={videoBG} autoPlay loop muted />
                <div className={style["video__content"]}>
                    <h2>READY TO MAKE A CHANGE IN YOUR LIFE ?</h2>
                    <p>Please tell me more about your special day and send your message.</p>
                    <button>INQUIRE FOR MORE DETAILS</button>
                </div>
            </div>
            {/*-----------------------The Latest------------------ */}
            <div className={style["latest__sec"]}>
                <p>THE LATEST</p>
                <h2>What’s New on the Blog?</h2>
                <div className="container">
                    <CardTwo />
                </div>
            </div>
            {/*-----------------------Footer------------------ */}
            <Footer />
        </>
    );
}

export default Home;