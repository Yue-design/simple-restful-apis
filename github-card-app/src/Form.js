import React, {useRef, useState} from 'react';
import axios from 'axios';
// an agent module

const Form = (props) => {

  const [username, setUsername] = useState('');

  // const usernameInput = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault(); // to avoid refresh
    const response = await axios.get(`https://api.github.com/users/${username}`);
    // console.log(
    //   // usernameInput.current.value
    //   // username
    //   response
    // )
    props.onSubmit(response.data);
  };

  const handleChange = (event) => {
    setUsername(event.target.value)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={handleChange} placeholder="Github username" required/>
      {/* <input type="text" ref={usernameInput} placeholder="Github username" required/> */}
      <button>Add</button>
    </form>
  );
}

export default Form;