import { useState } from 'react';
import './App.css';

function App() {

  const [inputs, setInputs] = useState({show: false});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setInputs(values => ({...values, show: true}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        maxLength={150}
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <br />
      <label>Enter your age:
      <input 
        type="number" 
        name="age" 
        min="1"
        max="125"
        value={inputs.age || ""} 
        onChange={handleChange}
      />
      </label>
        <br />
      <label>
      Favorite season:
      <select name="season" onChange={handleChange}>
        <option value=""></option>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
        <option value="Fall">Fall</option>
        <option value='Winter'>Winter</option>
      </select>
      </label>
      <p>
        Can you drive a car?
        <label>
          <input 
            type="radio" 
            name="drive" 
            value="yes"
            onChange={handleChange} 
            />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="drive"
            value="no" 
            onChange={handleChange}
          />
          No
        </label>
      </p>
      <label>
      {inputs.show &&
        <p>Your name is {inputs.username}.</p>}</label>
      <label>
      {inputs.show &&
        <p>Your age is {inputs.age}.</p>}</label>
        <label>
      {inputs.show &&
        <p>Your favorite season is {inputs.season}.</p>}</label>
        <label>
      {inputs.show &&
        <p>You can drive a car: {inputs.drive}.</p>}</label>

      <input type="submit" />
    </form>
  )
  
}

export default App;
