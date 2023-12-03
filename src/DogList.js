import React, { useState } from "react";
import { Link } from "react-router-dom";



function DogList({dogs}) {

    return (
        <nav className="NavBar">
            <Link to="/colors">Go To Colors Site</Link>
            <h1>Dogs!</h1>
            <h3>Pick a Dog!</h3>
            {dogs.map((dog) => {
                   return (
                    <div>
                        <br/>
                        <Link to={"/dogs/"+dog.name.toLowerCase()}>
                            {dog.name}
                        </Link>
                    </div>);
            })}
        </nav>
    );
}

export default DogList;