import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore();

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

    activityStore.loadActivities();
  }, [activityStore]);

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


  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />;

  return (
    <>
      <NavBar/>
      <Container style={{ marginTop: '7em' }}>
        

        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
