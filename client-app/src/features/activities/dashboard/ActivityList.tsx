import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activties: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}
export default function ActivityList({ activties, selectActivity, deleteActivity }: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {activties.map((item) => (
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
                  onClick={() => selectActivity(item.id)}
                  floated='right'
                  content='View'
                  color='blue'
                />
                <Button
                  onClick={() => deleteActivity(item.id)}
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
}