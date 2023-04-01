import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddNewCommentSchema } from "../types/addNewComment";

const initialState: AddNewCommentSchema = {
    text: '',
};
export const addNewCommentSlice = createSlice({
    name: "addNewComment",
    initialState,
    reducers: {
        setNewComment: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUserName.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUserName.fulfilled, (state, action) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUserName.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { reducer: addNewCommentReducer } = addNewCommentSlice;
export const { actions: addNewCommentActions } = addNewCommentSlice;
