import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityFilters from './ActivityFilters';
// import ActivityDetails from '../details/ActivityDetails';
// import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

export default observer (function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry }=activityStore;
  //const { selectedActivity, editMode } = activityStore;

  useEffect(() => {
    // axios
    //   .get<Activity[]>('http://localhost:5000/api/Activites')
    //   .then((response) => {
    //     setActivities(response.data);
    //   });

    // agent.Activities.list().then((respone) => {
    //   let activites: Activity[] = [];

    //   respone.forEach((activity) => {
    //     activity.date = activity.date.split('T')[0];
    //     activites.push(activity);
    //   });

    //   setActivities(activites);
    //   setLoading(false);
    // });

    if (activityRegistry.size <= 1) loadActivities();
  }, [activityRegistry.size, loadActivities]);

  // function handleCreateOrEditActivity(activity: Activity) {
  //   setSubmitting(true);

  //   if (activity.id) {
  //     agent.Activities.update(activity).then(() => {
  //       setActivities([
  //         ...activties.filter((x) => x.id !== activity.id),
  //         activity,
  //       ]);
  //       setSelectedActivity(activity);
  //       setEditMode(false);
  //       setSubmitting(false);
  //     });
  //   } else {
  //     activity.id = uuid();
  //     agent.Activities.create(activity).then(() => {
  //       setActivities([...activties, activity]);
  //       setSelectedActivity(activity);
  //       setEditMode(false);
  //       setSubmitting(false);
  //     });
  //   }
  //   // activity.id
  //   //   ? setActivities([
  //   //       ...activties.filter((x) => x.id !== activity.id),
  //   //       activity,
  //   //     ])
  //   //   : setActivities([...activties, { ...activity, id: uuid() }]);
  //   // setEditMode(false);
  //   // setSelectedActivity(activity);
  // }

  if (activityStore.loadingInitial)
    return <LoadingComponent content='Loading activities' />;

  return (
    <Grid>
      <Grid.Column width='10'>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width='6'>
        {/* {selectedActivity && !editMode && (
          <ActivityDetails />
        )}
        {editMode && (
          <ActivityForm />
        )} */}
        <ActivityFilters/>
      </Grid.Column>
    </Grid>
  );
})
