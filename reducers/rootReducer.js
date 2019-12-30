// import {
//   LOAD_USERS_ERROR,
//   LOAD_USERS_LOADING,
//   LOAD_USERS_SUCCESS
// } from "../actions/index.js";

const initState = {
  loading: false,
  suggestions: [],
  error: ""
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "API_FETCH_DATA":
      console.log(action);

      return {
        ...state,
        suggestions: action.suggestions,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};
export default rootReducer;
// export default const reduxThunkReducer(state = initialState, action) =>{
//   switch (action.type) {
//     case LOAD_USERS_LOADING: {
//       return { ...state, loading: true, error: "" };
//     }
//     case LOAD_USERS_SUCCESS: {
//       return { ...state, suggestions: action.suggestions, loading: false };
//     }
//     case LOAD_USERS_ERROR: {
//       return { ...state, loading: false, error: action.error };
//     }
//     default: {
//       return state;
//     }
//   }
// }
