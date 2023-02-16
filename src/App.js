import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Introductory from "./Introductory";
import Searchbox from "./Searchbox";
import CropsCard from "./CropsCard";
import CropsData from "./CropsData";
import Main from "./Main";
import LoginCard from "./LoginCard";
import Footer from "./Footer";
import MyOwnCrops from "./MyOwnCrops";

export default function App() {

    const CropsElements = CropsData.map(x => {
        return (
            <CropsCard
                crop={x.crop}
                preCrop={x.preCrop}
                OnStock={x.OnStock}
                Basket = {x.Basket}
            />
        )
    })

    function toggleTeszt (CropsElements) {
        console.log("helo")}

    return (
        <div>
            <Navbar />
            <Introductory />
            <Searchbox 
                toggleTeszt = {toggleTeszt}
            />
            <section className="CropsCardContaineer">
                {CropsElements}
            </section>
            <Main />
            <MyOwnCrops />
            <LoginCard/>
            <Footer />
        </div>
    )
}