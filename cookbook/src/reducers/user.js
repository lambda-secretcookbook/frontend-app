const initalState = {
  currentUser: {},
  isLoggedIn: false,
  message: ""
};

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        currentUser: action.payload,
        isLoggedIn: false,
        message: ""
      };

    case "LOGIN_SUCCESS":
      return {
        currentUser: action.payload,
        isLoggedIn: true,
        message: ""
      };

    case "LOGIN_FAILURE":
      return {
        currentUser: {},
        isLoggedIn: false,
        message: action.payload
      };

    default:
      return state;
  }
};
