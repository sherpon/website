import { LANGUAGE_CHANGE } from '../components/language/language.actions.js';

import { getLanguage } from '../modules/language'; 

/**
 * @function language
 */
export default (state = getLanguage(navigator, localStorage), action) => {
  switch (action.type) {
    case LANGUAGE_CHANGE:
      return action.language;

    default:
      return state
  }
}