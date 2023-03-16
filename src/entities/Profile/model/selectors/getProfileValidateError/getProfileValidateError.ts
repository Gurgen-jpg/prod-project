import { StateSchema } from "app/providers/StoreProvider";

export const getProfileValidateError = (state: StateSchema) => {
    return state.profile?.validateError;
};
