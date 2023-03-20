import { StateSchema } from "app/providers/StoreProvider";

export const getInited = (state: StateSchema) => {
    return state.user._inited;
};
