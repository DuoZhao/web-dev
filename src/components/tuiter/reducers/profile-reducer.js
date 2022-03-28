import profile from "../data/profile.json";

const tuitsReducer = (state = profile, action) => {
    switch (action.type) {
        case 'save-profile':
            state[0].firstName = action.firstName;
            state[0].lastName = action.lastName;
            state[0].bio = action.bio;
            state[0].location = action.location;
            state[0].website = action.website;
            state[0].dateOfBirth = action.dateOfBirth;
            return state;
        default:
            return profile
    }
}

export default tuitsReducer;