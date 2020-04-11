const filter = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE FILTER':
      return action.word;
    default:
      return state;
  }
};

export default filter;
