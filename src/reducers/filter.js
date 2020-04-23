const filter = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE FILTER':
      return action.word;
    case 'RESET':
      return action.word;
    default:
      return state;
  }
};

export default filter;
