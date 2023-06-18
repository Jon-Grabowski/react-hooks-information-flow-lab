import React, {useState} from "react";

function Header({onDarkModeClick, state}) {
    return (
        <div>
            <header>
                <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>{state ? "Dark" : "Light"} Mode</button>
            </header>
        </div>
    )
}

export default Header;