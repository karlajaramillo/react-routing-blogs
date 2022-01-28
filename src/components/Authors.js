import React from 'react';

const profiles = [
  {
    "id": 100,
    "name": "Sammy",
    "img": "https://randomuser.me/api/portraits/women/76.jpg",
    "bio": "Software Developer at Ironhack"
  },
  {
    "id": 200,
    "name": "Loren",
    "img": "https://randomuser.me/api/portraits/men/18.jpg",
    "bio": "Frontend Developer at Ironhack"
  },
  {
    "id": 300,
    "name": "Amy",
    "img": "https://randomuser.me/api/portraits/women/27.jpg",
    "bio": "Junior FullStack Developer at Ironhack"
  }
  
]


const profileInfo = profiles.map(profile => {
  return (
    <div key={profile.id}>
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      <img src={profile.img} alt="" />
    </div>
  )
})

const Authors = ({onHistory}) => {

  return (
    <div>
      <h1>Authors</h1>
      {profileInfo}
      <button className="btn-history" type="button" onClick={onHistory}>⌃Home</button>
    </div>
  )
}

export default Authors;
