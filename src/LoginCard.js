import React from "react";

export default function LoginCard() {
    return (
        <section className="LoginCardSection">
            <div className="LoginCard">
                <h2>Felhasználónév</h2>
                <input placeholder="Felhasználónév"></input>
                <h2>Jelszó</h2>
                <input type="password" placeholder="Jelszó"></input>
                <button>Belépés</button>
            </div>
        </section>
    )
}