import React from "react";
import style from './Services.module.css'
import Navbar from '../Components/Navbar/Navbar'
import Coaching from '../../assets/about/OliviaPro-Yoga09-1.jpg'
import Coaching2 from '../../assets/about/OliviaPro-Yoga11-1.jpg'
import Coaching3 from '../../assets/home/OliviaPro-Yoga03-1.jpg'
import Footer from '../Components/Footer/Footer'


function Services() {
    const BoxData = [
        {
            title: "FRUSTRATED BY THIS THING...",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu gravida velit. Praesent at urna justo. Sed iaculis dapibus risusz."
        },
        {
            title: "OVERWHELMED BY THIS...",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu gravida velit. Praesent at urna justo. Sed iaculis dapibus risusz."
        },
        {
            title: "NOT SURE HOW TO..",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu gravida velit. Praesent at urna justo. Sed iaculis dapibus risusz."
        }
    ];
    return (
        <>
            <Navbar />
            <div className={style["services__header"]}>
                <div className={style["header__content"]}>
                    <h2>I CAN HELP BECAUSE I'VE BEEN THERE!</h2>
                    <p>NUTRITION & LIFESTYLE COACHING FOR WOMEN</p>
                </div>
            </div>
            <div className={style["personal__coaching"]}>
                <div className="container">
                    <div className={style["coaching__content"]}>
                        <div className={style["coaching__left__side"]}>
                            <h2><span>1:1 Personalized coaching</span></h2>
                            <p>Subway tile affogato flannel disrupt, wolf forage poutine godard intelligentsia +1 farm-to-table man braid authentic tattooed drinking vinegar.
                                Gluten-free austin street art DIY ennui. 8-bit squid sustainable small batch, meh leggings food truck banh mi franzen humblebrag pabst.
                                Jianbing whatever pug salvia, trust fund knausgaard cronut art party meh brunch normcore microdosing.
                                Cornhole celiac gastropub, wayfarers ramps iceland swag.</p>
                            <h3>This plan if perfect for you are feeling:</h3>
                            <div className={style["plan__tips"]}>
                                {BoxData.map((box, index) => (
                                    <div key={index} className={style["plan__box"]}>
                                        <i className="fa-solid fa-check"></i>
                                        <div className={style["box__text"]}>
                                            <h3>{box.title}</h3>
                                            <p>{box.paragraph}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button>Join to the program</button>
                        </div>
                        <div className={style["coaching__right__side"]}>
                            <img src={Coaching} alt="tips" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style["group__coaching"]}>
                <div className="container">
                    <div className={style["coaching__content"]}>
                        <div className={style["coaching__right__side"]}>
                            <img src={Coaching3} alt="tips" />
                        </div>
                        <div className={style["coaching__left__side"]}>
                            <h2><span>Group coaching</span></h2>
                            <p>Subway tile affogato flannel disrupt, wolf forage poutine godard intelligentsia +1 farm-to-table man braid authentic tattooed drinking vinegar.
                                Gluten-free austin street art DIY ennui. 8-bit squid sustainable small batch, meh leggings food truck banh mi franzen humblebrag pabst.
                                Jianbing whatever pug salvia, trust fund knausgaard cronut art party meh brunch normcore microdosing.
                                Cornhole celiac gastropub, wayfarers ramps iceland swag.</p>
                            <h3>This plan if perfect for you are feeling:</h3>
                            <div className={style["plan__tips"]}>
                                {BoxData.map((box, index) => (
                                    <div key={index} className={style["plan__box"]}>
                                        <i className="fa-solid fa-check"></i>
                                        <div className={style["box__text"]}>
                                            <h3>{box.title}</h3>
                                            <p>{box.paragraph}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button>Join to the program</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style["nutrition__guide"]}>
                <div className="container">
                    <div className={style["coaching__content"]}>
                        <div className={style["coaching__left__side"]}>
                            <h2><span>Nutrition & Wellness Guides</span></h2>
                            <p>Subway tile affogato flannel disrupt, wolf forage poutine godard intelligentsia +1 farm-to-table man braid authentic tattooed drinking vinegar.
                                Gluten-free austin street art DIY ennui. 8-bit squid sustainable small batch, meh leggings food truck banh mi franzen humblebrag pabst.
                                Jianbing whatever pug salvia, trust fund knausgaard cronut art party meh brunch normcore microdosing.
                                Cornhole celiac gastropub, wayfarers ramps iceland swag.</p>
                            <h3>This plan if perfect for you are feeling:</h3>
                            <div className={style["plan__tips"]}>
                                {BoxData.map((box, index) => (
                                    <div key={index} className={style["plan__box"]}>
                                        <i className="fa-solid fa-check"></i>
                                        <div className={style["box__text"]}>
                                            <h3>{box.title}</h3>
                                            <p>{box.paragraph}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button>Join to the program</button>
                        </div>
                        <div className={style["coaching__right__side"]}>
                            <img src={Coaching2} alt="tips" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Services;