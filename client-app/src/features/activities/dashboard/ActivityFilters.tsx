import React from 'react';
import { Header, Menu } from 'semantic-ui-react';
import Calendar from 'react-calendar'

function ActivityFilters() {
  return (
    <>
      <Menu vertical size='large' fluid style={{ with: '100%', marginTop: '25px' }}>
        <Header icon='filter' attached color='teal' content='Filters' />
        <Menu.Item content='All Activities' />
        <Menu.Item content="I'm going" />
        <Menu.Item content="I'm hosting" />
      </Menu>
      <Header />
      <Calendar/>
    </>
  );
}

export default ActivityFilters;
