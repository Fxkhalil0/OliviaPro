import React from "react";
import style from './Navbar.module.css'
import Logo from '../../../assets/logo.png'
import { NavLink } from "react-router-dom";




function Navbar() {
    return (
        <>
            <nav>
                <div className="container">
                    <div className={style["parent__div"]}>
                        <div className={style["first__part"]}>
                            <div className={style["icons"]}>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-x-twitter"></i>
                                <i class="fa-brands fa-pinterest-p"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <figure>
                                <img src={Logo} alt="Olivia Pro" />
                            </figure>
                            <button>Work With Me</button>
                        </div>
                        <div className={style["sec__part"]}>
                            <ul>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                                <li>Blog</li>
                                <li><NavLink to="/services">Services</NavLink></li>
                                <li>Pages<i class="fa-solid fa-chevron-down"></i>
                                    <div className={style["sub__menu"]}>
                                        <ul>
                                            <li><NavLink to="/pricing-table">Pricing Table</NavLink></li>
                                            <li>Testimonials</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>Podcast</li>
                                <li>Shop</li>
                                <li>Contact</li>
                                <li><i class="fa-solid fa-magnifying-glass"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;