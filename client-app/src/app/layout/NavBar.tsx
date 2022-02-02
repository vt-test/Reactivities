import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
//import { useStore } from '../stores/store';

export default function NavBar() {
  //const { activityStore } = useStore();

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} to='/' exact header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 10 }} />
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to='/activities' name='Activites' />
        <Menu.Item as={NavLink} to='/errors' name='Errors' />
        <Menu.Item>
          <Button
            //onClick={() => activityStore.openForm()}
            as={NavLink}
            to='/createActivity'
            positive
            content='Create Activite'
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
