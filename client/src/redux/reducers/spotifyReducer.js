const initialState = {
  results: [],
  loading: true,
  error: {}
};

function spotifyReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        results: payload,
        loading: false
      };
    case 'SEARCH_FAIL':
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default spotifyReducer;
