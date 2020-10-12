import React, {useState} from "react";
import "./App.css";
import Card from "./Card";
import CardList from "./CardList";
import Form from "./Form";
// Handle Errors: invalid input & network problems

// const testData = [
//   {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"}
// ]

function App() {

  const [profiles, setProfiles] = useState([]);

  const addNewProfile = (profileData) => {
    // console.log('App', profileData);
    setProfiles([...profiles, profileData]);
    // setProfiles(prevState => ({
    //   profiles: [...prevState.profiles, profileData],
    // }));
  };

  return (
    <div>
      <div className="header">The Github Cards App</div>
        <Form onSubmit={addNewProfile}/>
        <CardList profiles={profiles}/>
    </div>
  );
}

export default App;
