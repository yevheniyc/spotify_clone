// what does the initial state of the StateProvider (data layer) looks like
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  // for testing add the token here
  // token:
  //   "BQA7zJt3qUXM7kvq2Cb11OwtYni1j3N5iPBYXiDPOeCYpLfkImzHEu-DkC8KhlHfd2FjvkzCcDtaz9x1dqcaake0SXPyQ-ziY_rOGichE7xvDE2gsZxzi_qz6E1ii-bOPhK_GuR2FG6C4Hum-NL6g-U6TCYx",
};

// state is how the state looks like right now
// action: SET_USER, SET_CURRENT_PLAYLIST, etc.

// When we push something into the data layer, we dispatch an action
// an action has a type and [payload] (dynamic and whatever we want)

// When the reducer receives the action, it will update the data layer
// based on that action. The way it updates it, is it keeps whatever was
// in the current state, and update only a small part of the new state
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    // and if none of the cases are met, just return the current state
    default:
      return state;
  }
};

export default reducer;
