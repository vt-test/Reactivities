import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Dropdown, Image, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';
//import { useStore } from '../stores/store';

export default observer(function NavBar() {
  //const { activityStore } = useStore();
  const { userStore: {user,logout} } = useStore();

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

        <Menu.Item position='right'>
          <Image
            src={user?.image || '/assets/user.png'}
            avatar
            spaced='right'
          />
          <Dropdown pointing='top left' text={user?.displayName}>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to={`/profiles/${user?.username}`}
                text='My profile'
                icon='user'
              />
              <Dropdown.Item onClick={logout} text='Logout' icon='power' />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Container>
    </Menu>
  );
})
