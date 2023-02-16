import React from "react";
import { useState, useRef } from "react";

export default function MyOwnCrops() {

    const [MyCrop, setMyCrop] = useState("");
    
    const inputRef = useRef(null)
    let RenderedOutput

    function setMyCrops() {
        const AskedCrops = inputRef.current.value;

        setMyCrop(prevMyCrop => [AskedCrops, ...prevMyCrop])
        
        RenderedOutput = MyCrop.map(x => <div>{x}</div>)
        console.log('value is:', MyCrop);
        console.log('value is:', RenderedOutput);

    }
    return (
        <div className="MyOwnCropsSection">
            Myowncrops:
            <input
                ref={inputRef}
                placeholder="keresés"
            />

            <button onClick={setMyCrops}>mehet</button>
            <div>
                <div> 
                    ide renderelem:{MyCrop == "" ? "yes" : MyCrop}
                </div>

            </div>

        </div>
    )
}
