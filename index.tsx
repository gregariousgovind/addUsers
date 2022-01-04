import React, { useState } from 'react';
import { render } from 'react-dom';

import AddUser from './src/components/Users/AddUser';
import UsersList from './src/components/Users/UsersList';

import './style.css';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), name: name, age: age },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
