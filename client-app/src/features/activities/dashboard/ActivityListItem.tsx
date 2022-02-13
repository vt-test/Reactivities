import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Icon,
  Item,
  ItemHeader,
  Label,
  Segment,
} from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityListItemAttendee from './ActivityListItemAttendee';

interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
  // const [target, setTarget] = useState('');
  // const { activityStore } = useStore();
  // const { deleteActivity, loading } = activityStore;

  // function handleActivityDelete(
  //   e: SyntheticEvent<HTMLButtonElement>,
  //   id: string
  // ) {
  //   setTarget(e.currentTarget.name);
  //   deleteActivity(id);
  // }

  return (
    <Segment.Group>
      <Segment>
        {activity.isCancelled && (
          <Label
            attached='top'
            color='red'
            content='Cancelled'
            style={{ textAlign: 'center' }}
          />
        )}

        <Item.Group>
          <Item>
            <Item.Image
              style={{ marginBottom: 10 }}
              size='tiny'
              circular
              src='/assets/user.png'
            />
            <Item.Content>
              <ItemHeader ss={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </ItemHeader>
              <Item.Description>
                Hosted by {activity.host?.displayName}
              </Item.Description>
              {activity.isHost && (
                <Item.Description>
                  <Label basic color='orange'>
                    You are hosting this activity
                  </Label>
                </Item.Description>
              )}
              {activity.isGoing && !activity.isHost && (
                <Item.Description>
                  <Label basic color='green'>
                    You are gooing to this activity
                  </Label>
                </Item.Description>
              )}
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {format(activity.date!, 'dd MMM yyyy h:mm aa')}
          <Icon name='marker' /> {activity.venue}
        </span>
      </Segment>
      <Segment secondary>
        <ActivityListItemAttendee attendees={activity.attendees!} />
      </Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          color='teal'
          floated='right'
          content='View'
        />
      </Segment>
    </Segment.Group>
  );
}
