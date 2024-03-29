import React from "react";
import MySpinner from '../../../assets/preloader3.gif'





function Spinner() {


    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fefefe",
                position: "fixed",
                left: 0,
                right: 0,
                bottom: 0,
                height: "100%",
                width: "100%",
                overflow: "hidden",
                zIndex: 9999,
            }}>
                <img
                    style={{ width: "70px", height: "70px" }}
                    src={MySpinner}
                    alt=""
                />

            </div >
        </>
    );
}

export default Spinner;