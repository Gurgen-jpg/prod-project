import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword";

describe('getLoginPassword.test', () => {
    test('should return password', async () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });
    test('should work with empty state', async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
