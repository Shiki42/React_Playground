import React, { useState, useEffect } from 'react';
//import './l13hw2.css';

const App = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    }, []);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>GitHub Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
    



export default App;