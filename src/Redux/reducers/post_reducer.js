const initState = {
  posts: []
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "NEW_POST":
      return {
        ...state,
        posts: state.posts.concat(action.payload)
      };
    default:
      return state;
  }
};

export default postReducer;
