const countries = (state=[],action) => {
    switch (action.type) {
        case 'SHOW COUNTRIES':
            return action.countries;
        default:
            return state;
    }
}

export default countries;
