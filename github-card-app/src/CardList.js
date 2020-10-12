import React from 'react';
import Card from './Card';

// const testData = [
//   {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"}
// ]

const CardList = (props) => {
  return(
    <div>
      {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
  )
}

// [<Card />, <Card />, <Card />]
// [React.createElement(), React.createElement(), React.createElement()]

export default CardList;