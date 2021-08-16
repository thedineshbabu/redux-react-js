import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddActivity() {

    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: '',
        duration: ''
    });

    const addActivity = () => {
        console.log(data);
        dispatch({
            type: 'ADD_ACTIVITY',
            payload: {
                name: data.name,
                duration: data.duration
            }
        });
    };

    const handleChange = (event) => {
        event.persist();
        setData(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    return (
        <div className="add">
            <div className="input-section">
                <p>Activity:</p>
                <input onChange={ (e) => (handleChange(e))} name={"name"} placeholder="Activity Name"/>
            </div>

            <div className="input-section">
                <p>Duration:</p>
                <input onChange={ (e) => (handleChange(e))} name={"duration"} placeholder="Activity Name"/>
            </div>

            <button onClick={addActivity}>Add Activity</button>
        </div>
    )
}

export default AddActivity
