import {createSelector} from "reselect";

const loaderState = (state) => state.loader;

export const isLoading = createSelector(loaderState, (loader) => loader.requests.length > 0);
