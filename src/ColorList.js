import React, { useState } from "react";
import { Link } from "react-router-dom";


function ColorList({colors}) {

    return (
        <nav className="NavBar">
            <Link to="/dogs">Go To Dog Site</Link>
            <h1>Colors!</h1>
            <Link to={"/colors/new"}>
                Add new color!
            </Link>
            {colors.map((color) => {
                   return (
                    <div>
                        <br/>
                        <Link to={"/colors/"+color.name}>
                            {color.name}
                        </Link>
                    </div>);
            })}
        </nav>
    );
}

export default ColorList;