import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage";

interface LoginByUserNameProps {
    username: string;
    password: string;
}

enum LoginError {
    INCORREC_DATA = "",
    SERVER_ERRROR = "",
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
    'login/loginByUserName',
    async ({ username, password }, thunkApi) => {
        const { dispatch, rejectWithValue, extra } = thunkApi;
        try {
            const response = await extra.api.post(`/login`, {
                username,
                password,
            });
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate('/about');
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
