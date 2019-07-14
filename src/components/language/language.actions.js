
export const LANGUAGE_CHANGE = 'LANGUAGE_CHANGE';

export const handleChangeLanguage = (language) => (dispatch, getState) => {
  dispatch({
    type: LANGUAGE_CHANGE,
    language: language,
  });
};