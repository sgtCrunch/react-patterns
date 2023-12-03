import { useParams, useNavigate, Navigate } from "react-router-dom";


function ColorInfo({colors}){

    const info = useParams();
    const navigate = useNavigate();

    const color = colors.find((color) => color.name.toLowerCase() === info.name);
    if(color === undefined) {
        return <Navigate to="/colors" />
    }

    const styleDiv ={
        backgroundColor : color.code
    }

    return (
        <div style={styleDiv}>
            <br/>
            <h1>{color.name}</h1>
            <button onClick={()=>navigate("/colors")}>Go Back</button>
        </div>
    );

}

export default ColorInfo;