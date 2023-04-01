import { StateSchema } from "app/providers/StoreProvider";

export const getAddNewCommentText = (state: StateSchema) => {
    return state.addNewComment?.text || "";
};

export const getAddNewCommentError = (state: StateSchema) => {
    return state.addNewComment?.error;
};
