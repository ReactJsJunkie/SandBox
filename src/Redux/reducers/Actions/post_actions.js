export const newPost = postData => dispatch =>
  dispatch({ type: "NEW_POST", payload: postData });
