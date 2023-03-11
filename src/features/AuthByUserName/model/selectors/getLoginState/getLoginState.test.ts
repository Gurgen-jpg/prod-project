import { StateSchema } from "app/providers/StoreProvider";
import { getLoginState } from "./getLoginState";

describe('getLoginState.test', () => {
    test('should return username', async () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
                password: '123',
                isLoading: true,
                error: '',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'username',
            password: '123',
            isLoading: true,
            error: '',
        });
    });
    test('should work with empty state', async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
