import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollSaverSchema } from "features/scrollSaver";

const initialState: ScrollSaverSchema = {
    scroll: {},
};

export const scrollSlice = createSlice({
    name: 'scrollSlice',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { reducer: scrollSliceReducer } = scrollSlice;
export const { actions: scrollSliceActions } = scrollSlice;
