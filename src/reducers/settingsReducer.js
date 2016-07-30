import C from '../constants';

const initialState = {
  audioEnabled: true
};

let settingsReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case C.UPDATE_SETTING:
      return {
        ...currentState,
        [action.setting]: action.value
      };
      break;

    case C.FETCHED_SETTINGS:
      return {
        ...currentState,
        ...action.settings
      };
      break;

    default:
      return currentState;
      break;
  }
}

export default settingsReducer;
