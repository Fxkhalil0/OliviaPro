import React from "react";
import style from './PricingTable.module.css'
import Navbar from "../Components/Navbar/Navbar";
import Card1 from '../../assets/home/OliviaPro-Yoga14-1.jpg'
import Card2 from '../../assets/about/OliviaPro-Yoga04-copy-1.jpg'
import Card3 from '../../assets/about/OliviaPro-Yoga09-1.jpg'
import Footer from "../Components/Footer/Footer";



function PricingTable() {
    const cardData = [
        {
            title: "FACEBOOK GROUP",
            freeAccess: "FREE ACCESS",
            additionalInfo: [
                "+ WEEKLY EMAIL CHECK-IN.",
                "+ ACCESS TO MY PRIVATE FACEBOOK GROUP.",
                "+ CONNECT WITH WOMEN LIKE YOU.",
                "+ WORKBOOK TO HELP YOU CREATE BETTER HABITS."
            ],
            image: Card1,
        },
        {
            title: "1:1 COACHING",
            freeAccess: "Investment // 3 Months For $1200",
            additionalInfo: [
                "+ WEEKLY EMAIL CHECK-IN.",
                "+ ACCESS TO MY PRIVATE FACEBOOK GROUP.",
                "+ CONNECT WITH WOMEN LIKE YOU.",
                "+ WORKBOOK TO HELP YOU CREATE BETTER HABITS."
            ],
            image: Card2,
        },
        {
            title: "GROUP COACHING",
            freeAccess: "Investment // 6 Months For $600",
            additionalInfo: [
                "+ WEEKLY EMAIL CHECK-IN.",
                "+ ACCESS TO MY PRIVATE FACEBOOK GROUP.",
                "+ CONNECT WITH WOMEN LIKE YOU.",
                "+ WORKBOOK TO HELP YOU CREATE BETTER HABITS."
            ],
            image: Card3,
        },
    ];
    return (
        <>
            <Navbar />
            <div className={style["pricing__header"]}>
                <div className={style["header__content"]}>
                    <h2>PRICING TABLE</h2>
                    <p>CHOOSE YOUR PROGRAM</p>
                </div>
            </div>
            <div className={style["pricing__content"]}>
                <div className="container">
                    <div className={style["pricing__cards"]}>
                        {cardData.map((card, index) => (
                            <div key={index} className={style["card"]}>
                                <h2>{card.title}</h2>
                                <p>{card.freeAccess}</p>
                                <figure>
                                    <img src={card.image} alt={`card${index + 1}`} />
                                </figure>
                                <p>
                                    {card.additionalInfo.map((info, i) => (
                                        <React.Fragment key={i}>
                                            {info}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                <button>Enroll Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PricingTable;