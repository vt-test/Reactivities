import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';
import { Header, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityListItem from './ActivityListItem';

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { groupedActivities, activitiesByDate } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color='teal'>
            {group}
          </Header>
          {activities.map((item) => (
            <ActivityListItem key={item.id} activity={item} />
          ))}
        </Fragment>
      ))}
    </>
  );
});
