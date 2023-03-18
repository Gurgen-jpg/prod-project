import { StateSchema } from "app/providers/StoreProvider";

export const getProfileFirstName = (state: StateSchema) => {
    return state?.profile?.data?.firstname || '';
};
