import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SocialCard from './SocialCard';
import './SocialCard.css';

  function HomePageUserCards() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        (async () => {
          let userData;
          try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            userData = (await response.json());
          } catch (error) {
            console.log(error);
            userData = [];
          }

          setUsers(userData);

        })();
    }, []);

    return (
      <div className="App">
      <h1>Social Cards</h1>
      <div className="cards-container">
        {users.map((user, id) => (
          <SocialCard userData={user} key={id}/>
        ))}
        <button className="moreInfoBtn">More Information</button>
        </div>
      </div>
    );
}
  
export default HomePageUserCards;
