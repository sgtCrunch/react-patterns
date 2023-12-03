import { useParams, useNavigate, Navigate } from "react-router-dom";


function DogDetails({dogs}){

    const info = useParams();
    const navigate = useNavigate();

    const dog = dogs.find((dog) => dog.name.toLowerCase() === info.name);
    if(dog === undefined) {
        return <Navigate to="/dogs" />
    }

    function renderFacts(){
        return (
            <div>
                {dog.facts.map((fact) => <h4>{fact}</h4>)}
            </div>
        );
    }

    return (
        <div>
            <img src={dog.src}/>
            <br/>
            <h1>{dog.name}</h1>
            <h4>age: {dog.age}</h4>
            {renderFacts()}
            <button onClick={()=>navigate("/dogs")}>Go Back</button>
        </div>
    );

}

export default DogDetails;