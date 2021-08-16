import { v4 as uuid } from 'uuid';
const initialState = [{
    id: 1,
    name: "gym",
    duration: "2 Hours",
}];

const activitiesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_ACTIVITY":
            return [...state, {
                id: uuid(),
                name: payload.name,
                duration: payload.duration,
            }]
        case "DELETE_ACTIVITY":
            const copyState = [...state];
            const i = copyState.findIndex(activity => activity.id === payload.id);
            copyState.splice(i, 1);
            return [...copyState];
        default:
            return state;
    }
};

export default activitiesReducer;