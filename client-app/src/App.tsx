import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activties, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Activites').then((response) => {
      console.log(response);
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />

      <List>
        {activties.map((item: any) => (
          <List.Item key={item.id}>{item.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
