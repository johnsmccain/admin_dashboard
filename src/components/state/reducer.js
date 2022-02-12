export const TogglerReducer = (state, action) => {
  switch (key) {
    case "Toggle":
      return { toggle: !state.toggle };
      break;

    default:
      return state;
      break;
  }
};
