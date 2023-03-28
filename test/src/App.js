import { useState } from 'react';
import './App.css';

function App() {
  let message = ''

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    message = inputs.name
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
        type="text" 
        name="age" 
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
          <input type="radio" 
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
      <label>{message}</label>
        <input type="submit" />
    </form>
  )
  
}

export default App;
