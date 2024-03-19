import React from "react";
import style from './Footer.module.css'
import One from '../../../assets/footer/130449007_429994341718073_6012809881868555249_nlow.jpg'
import Two from '../../../assets/footer/130311205_780603975888339_4499319076537663349_nlow.jpg'
import Three from '../../../assets/footer/130305871_311764263334275_32241057412660905_nlow.jpg'


function Footer() {
    return (
        <>
            <footer>
                <svg className={style["waves"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L80,112C160,96,320,64,480,90.7C640,117,800,203,960,234.7C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                <div className="container">
                    <div className={style["footer__content"]}>
                        <div className={style["firs__foot"]}>
                            <h2>FOLLOW ME ON INSTAGRAM</h2>
                            <div className={style["footer__gallery"]}>
                                <img src={One} alt=""/>
                                <img src={Two} alt=""/>
                                <img src={Three} alt=""/>
                                <button><i class="fa-brands fa-instagram"></i>Follow on Instagram</button>
                            </div>
                            <div className={style["icons"]}>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-x-twitter"></i>
                                <i class="fa-brands fa-pinterest-p"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div className={style["sec__foot"]}>
                            <ul>
                                <li>NAVIGATE</li>
                                <li>01. ABOUT</li>
                                <li>02. SERVICES</li>
                                <li>03. CONTACT</li>
                                <li>04. PODCAST</li>
                                <li>05. BLOG</li>
                            </ul>
                        </div>
                        <div className={style["thir__foot"]}>
                            <h3>Contact Us</h3>
                            <div className={style["contact__info"]}>
                                <i class="fas fa-phone"></i>
                                <p>0111-111-5555</p>
                            </div>
                            <div className={style["contact__info"]}>
                                <i class="fas fa-envelope"></i>
                                <p>mail@example.com</p>
                            </div>
                            <div className={style["contact__info"]}>
                                <i class="fas fa-map-location-dot"></i>
                                <p>930 Commonwealth Ave #3, Boston, MA 02215, United States</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style["copy__right"]}>
                    <strong>
                        COPYRIGHT © 2024. BUSINESS NAME HERE | PRIVACY POLICY | TERMS OF USE | CONVERTED BY FATMA KHALIL
                    </strong>
                </div>
            </footer>
        </>
    );
}

export default Footer;