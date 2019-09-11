const initState = {
  post: {},
  posts: [],
  error: {
    title: {
      status: false,
      class: "form-control",
      text: {
        message: "Please give a subject to your post",
        class: "form-text text-muted"
      }
    }
  }
};

export default function postReducer(state = initState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
