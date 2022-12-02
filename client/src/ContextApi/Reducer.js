const Reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          currentUser: null,
          isFetching: true,
          error: false,
        };
      case "LOGIN_SUCCESS":
        return {
            currentUser: action.payload,
          isFetching: false,
          error: false,
        };
      case "LOGIN_FAILURE":
        return {
            currentUser: null,
          isFetching: false,
          error: true,
        };
        case "UPDATE_START":
          return {
            ...state,
            isFetching:true
          };
        case "UPDATE_SUCCESS":
          return {
            currentUser: action.payload,
            isFetching: false,
            error: false,
          };
        case "UPDATE_FAILURE":
          return {
            currentUser: state.currentUser,
            isFetching: false,
            error: true,
          };
      case "LOGOUT":
        return {
            currentUser: null,
          isFetching: false,
          error: false,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;