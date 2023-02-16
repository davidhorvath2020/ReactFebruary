import React from "react";

export default function Introductory() {

    const [Line, setLine] = React.useState(false)

    function ShowLine () {
        console.log("helo")
        setLine(prevLine =>!prevLine)
        console.log(Line)
    }


    return (
        <div>
            <div className="IntroductoryDiv">
                <h1 className="IntroductoryTitle" onMouseOver={ShowLine}>Szántóföldi növényeinkről</h1>
                {Line ? <hr className="HRLine"/> : ""}
                <div className="IntroductoryMain">
                    <p>Magyarország vetésszerkezete az utóbbi években pár növény által domináns</p>
                    <p>A kukorica és a búza együttesen 2 millió hektárt jelent</p>
                </div>
            </div>
        </div>
    )
}