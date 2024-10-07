import colors from './colors';

const initialState = {
  index: 0,
  content: "Everything exists.",
  author: "Huy"
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "NEW_QUOTE":
      let i = Math.floor(Math.random() * colors.length);
      while (i === state.index) {
        i = Math.floor(Math.random() * colors.length);
      }

      return {
        index: i,
        content: state.content,
        author: state.author
      };
    default:
      return state;
  }
};

export default reducer;