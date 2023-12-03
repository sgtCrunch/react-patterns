import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const ColorForm = ({ addColor }) => {

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = evt => {
      evt.preventDefault();
      addColor(formData);
      navigate("/colors");
    };
    
    const handleChange = evt => {
      const { name, value }= evt.target;
      setFormData(fData => ({
        ...fData,
        [name]: value
      }));
    };
    
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="code">Color:</label>
        <input
          type="color"
          id="code"
          name="code"
          value={formData.code}
          onChange={handleChange}
        />
  
        <button>Add a new Color!</button>
      </form>
    );
  };
  
  export default ColorForm;
  