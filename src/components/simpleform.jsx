import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState(""); // State to control input

  const handleChange = (event) => {
    setName(event.target.value); // Update state on input change
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted with name: ${name}`);
    setName(""); // Reset the input after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name} // Controlled by React state
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
