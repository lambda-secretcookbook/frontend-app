const initalState = {
  currentUser: {},
  isLoggedIn: false
};

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        currentUser: action.payload,
        isLoggedIn: false
      };

    case "LOGIN_SUCCESS":
      return {
        currentUser: action.payload,
        isLoggedIn: true
      };

    default:
      return state;
  }
};
