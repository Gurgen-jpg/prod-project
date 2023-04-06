import { StateSchema } from "app/providers/StoreProvider";

export const getScrollPosition = (state: StateSchema) => {
    return state.scrollSaver.scroll;
};
