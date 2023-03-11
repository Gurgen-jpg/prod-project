import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername";

describe('getLoginUsername.test', () => {
    test('should return username', async () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('username');
    });
    test('should work with empty state', async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
