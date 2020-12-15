//FIXED TYPES
import VegeloperPageActionTypes from "./vegeloperPage.types";

const INITIAL_STATE = {
  menuOpen: false,
  error: null,
  darkMode: false,
};

const VegeloperPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VegeloperPageActionTypes.TOGGLE_MENU_OPEN:
      console.log("Hello from MENU OPEN :D");
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    case VegeloperPageActionTypes.TOGGLE_DARK_MODE:
      console.log("Hello from DARK MODE :D");
      return {
        ...state,
        darkMode: true,
      };

    default:
      return state;
  }
};

export default VegeloperPageReducer;
