import React, { useState, Fragment } from 'react';
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
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
};

render(<App />, document.getElementById('root'));
