import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
// import i18n from "shared/config/i18n/i18n";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage";

interface LoginByUserNameProps {
    username: string;
    password: string;
}

enum LoginError {
    INCORREC_DATA = "",
    SERVER_ERRROR = "",
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
    'login/loginByUserName',
    async ({ username, password }, thunkApi) => {
        try {
            const response = await axios.post(`http://localhost:8000/login`, {
                username,
                password,
            });
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            thunkApi.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue('error');
        }
    },
);
