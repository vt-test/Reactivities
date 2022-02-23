import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
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
    clearSelectedActivity
  } = activityStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadActivitiy(id);

    return () => clearSelectedActivity();
  }, [id, loadActivitiy, clearSelectedActivity]);

  if (loadingInitial || !activity)
    return <LoadingComponent content='Loadnig' />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailHeader activity={activity} />
        <ActivityDetailInfo activity={activity} />
        <ActivityDeatailChat activityId={activity.id} />
      </Grid.Column>
      <Grid.Column width={6}>
        <AcivityDetailSidebar activity={activity} />
      </Grid.Column>
    </Grid>
  );
});
