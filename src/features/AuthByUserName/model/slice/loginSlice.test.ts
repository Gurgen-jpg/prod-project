import { LoginSchema } from "features/AuthByUserName";
import { DeepPartial } from "@reduxjs/toolkit";
import { loginActions, loginReducer } from "features/AuthByUserName/model/slice/loginSlice";

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state:DeepPartial<LoginSchema> = {
            username: 'username',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('test username')))
            .toEqual({ username: 'test username' });
    });
    test('test set password', () => {
        const state:DeepPartial<LoginSchema> = {
            password: 'password',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('test password')))
            .toEqual({ password: 'test password' });
    });
});
