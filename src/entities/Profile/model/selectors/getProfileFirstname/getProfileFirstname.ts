import { StateSchema } from "app/providers/StoreProvider";

export const getProperties = (state: StateSchema) => {
    return state?.profile?.data?.username || '';
};
