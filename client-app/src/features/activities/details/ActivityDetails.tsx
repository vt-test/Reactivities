import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, ButtonGroup, Card, Grid, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import AcivityDetailSidebar from './AcivityDetailSidebar';
import ActivityDeatailChat from './ActivityDeatailChat';
import ActivityDetailHeader from './ActivityDetailHeader';
import ActivityDetailInfo from './ActivityDetailInfo';

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivitiy,
    loadingInitial,
  } = activityStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadActivitiy(id);
  }, [id, loadActivitiy]);

  if (loadingInitial || !activity)
    return <LoadingComponent content='Loadnig' />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailHeader activity={activity} />
        <ActivityDetailInfo activity={activity} />
        <ActivityDeatailChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <AcivityDetailSidebar />
      </Grid.Column>
    </Grid>
  );
});
