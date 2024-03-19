import React from "react";
import style from './Home.module.css'
import Navbar from "../Components/Navbar/Navbar";
import Hero from '../../assets/home/OliviaPro-Yoga02-1.jpg'
import Cards from "../Components/Cards/Cards";
import Coach from '../../assets/home/OliviaPro-Yoga06-1.jpg'
import Orange from '../../assets/home/OliviaPro-Yoga07.jpg'




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
                <img src={Hero} />
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
                            <img src={Coach} />
                            <img src={Orange} className={style["second-image"]} />
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
        </>
    );
}

export default Home;