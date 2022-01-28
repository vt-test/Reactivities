import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const { selectedActivity: activity, loadActivitiy, loadingInitial } = activityStore;
  const{id}= useParams<{id:string}>();

  useEffect(() => {
    if (id) loadActivitiy(id);
  }, [id, loadActivitiy]);

  if (loadingInitial || !activity) return <LoadingComponent content='Loadnig' />;

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.cateroty}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ButtonGroup widths='2'>
          <Button
            //onClick={() => openForm(activity.id)}
            as={Link}
            to={`/manage/${activity.id}`}
            basic
            color='blue'
            content='Edit'
          />
          <Button
            //onClick={cancelSelectedActivity}
            as={Link}
            to='/activities'
            basic
            color='grey'
            content='Cancel'
          />
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
});
