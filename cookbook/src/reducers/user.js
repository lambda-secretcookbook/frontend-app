const initalState = {
  currentUser: {},
  isLoggedIn: false
};

export function userReducer(state = initalState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, currentUser: action.payload, isLoggedIn: true };
    default:
      return state;
  }
}
