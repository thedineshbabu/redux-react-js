import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Activity from './Activity';
import AddActivity from './AddActivity';

function Workouts() {
    const activities = useSelector((state) => state.activities);
    const [add, setAdd] = useState(false);
    return (
        <div className="workouts-wrapper">
            <h2>My Workout</h2>
            <button onClick={() => setAdd(!add)}>Add Activity</button>
            { add && <AddActivity/> }
            {activities.map((activity) => {
                return <Activity key={activity.id} id={activity.id} name={activity.name} duration={activity.duration}/>;
            }
            )}
        </div>
    )
}

export default Workouts;
