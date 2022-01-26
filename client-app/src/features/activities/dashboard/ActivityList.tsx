import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';


export default observer(function ActivityList() {
  const [target, setTarget] = useState('');

  const { activityStore } = useStore();
const {deleteActivity, activitiesByDate ,loading} = activityStore;
  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map((item) => (
          <Item key={item.id}>
            <Item.Content>
              <Item.Header as='a'>{item.title}</Item.Header>
              <Item.Meta>{item.date}</Item.Meta>
              <Item.Description>
                <div>{item.description}</div>
                <div>
                  {item.city}, {item.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => activityStore.selectActivity(item.id)}
                  floated='right'
                  content='View'
                  color='blue'
                />
                <Button
                  name={item.id}
                  loading={loading && target === item.id}
                  disabled={loading && target === item.id}
                  onClick={(e) => handleActivityDelete(e, item.id)}
                  floated='right'
                  content='Delete'
                  color='red'
                />
                <Label basic content={item.cateroty} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
});
