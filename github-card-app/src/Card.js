import React from 'react';

// const testData = [
//   {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"}
// ]

const Card = (props) => {

  const profile = props;

  return (
    <div className="github-profile">
      <img src={profile.avatar_url} />
      <div className="info" style={{display: 'inline-block', marginLeft: 10}}>
        <div className="name" style={{ fontSize: '125%'}}>{profile.name}</div>
        <div className="company" style={ {color: Math.random() < 0.5 ? 'green' : 'red'}}>{profile.company}</div>
      </div>
    </div>
  );
};

export default Card;