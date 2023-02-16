import React from "react";

export default function CropsCard(props) {

    const StockNow = props.OnStock ? "van" : "nincs"
    const [show, setShow] = React.useState(false)
    function showStock() {
        setShow(prevShow => !prevShow)
    }

    const [basket, setBasket] = React.useState( 
        JSON.parse(localStorage.getItem("basket")) || 0
    );

    function Add () {
        setBasket(prevBasket =>prevBasket+1)
        console.log(basket)

    }
    function Substract () {
        setBasket(prevBasket => prevBasket>0 && prevBasket-1)
            console.log(basket)
    }

    React.useEffect(()=> {
        localStorage.setItem('basket',JSON.stringify(basket))
    },[basket])  //localStorage.clear();
    

    return (
        <div className="CropsCards">
            <h1>
                Főnövény: {props.crop}
            </h1>
            <h3>
                Jó elővetemény: {props.preCrop}
            </h3>
            <div onClick={showStock} className="Stock">
                Mutasd a készletet
                <div className="showedStock">{show && StockNow}</div>
            </div>
            <p>
                <button className="AddButtons" onClick={Substract}>-</button>
                <button className="AddButtons" onClick={Add}>+</button>
            </p>
            <p>A kosár tartalma: {basket}</p>
        </div>
    )
}