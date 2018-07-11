import { CHANGE_SEARCH_FIELD } from './constants';

export const setSearchField = (text) => {
    console.log("setSearchField action triggered. Text: " + text);
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text,
    }
}