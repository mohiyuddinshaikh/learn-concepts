export const formReducer = (state, action) => {
  switch (action?.type) {
    case "HANDLE_TEXT_CHANGE":
      return {
        ...state,
        [action?.field]: action?.payload,
      };

    case "HANDLE_CONSENT_CHANGE":
      return {
        ...state,
        consent: !state?.consent,
      };

    default:
      return state;
  }
};
