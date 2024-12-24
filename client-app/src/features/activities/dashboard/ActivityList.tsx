import { Header  } from "semantic-ui-react";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";
import { Fragment } from "react/jsx-runtime";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  // Debugging to check IDs
  // console.log(
  //   "Activity IDs: ",
  //   activities.map((activity) => activity.id)
  // );

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color="teal">
            {group}
          </Header>
          {activities.map((activity) => (
            <ActivityListItem
              key={activity.id}
              activity={activity}
              loading={false}
            />
          ))}
        </Fragment>
      ))}
    </>
  );
});
