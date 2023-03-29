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
        maxLength={125}
        type="number" 
        name="age" 
        min="1"
        max="250"
        value={inputs.age || ""} 
        onChange={handleChange}
      />
      </label>
        <br />
      <label>
      Favorite season:
      <select name="selectSeason">
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
            name="myRadio" 
            value="option1" />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="myRadio"
            value="option2" 
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

      <input type="submit" />
    </form>
  )
  
}

export default App;
