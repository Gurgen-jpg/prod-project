import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import axios from "axios";
import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;
        try {
            // const response = await extra.api.get<Profile>(`/profile`);
            const response = await axios.get('http://localhost:8000/profile');
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
