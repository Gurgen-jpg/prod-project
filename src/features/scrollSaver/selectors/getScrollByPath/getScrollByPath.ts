import { StateSchema } from "app/providers/StoreProvider";
import { createSelector } from "@reduxjs/toolkit";
import { getScrollPosition } from "features/scrollSaver/selectors/getScrollPosition/getScrollPosition";

export const getScrollByPath = createSelector(
    getScrollPosition,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
