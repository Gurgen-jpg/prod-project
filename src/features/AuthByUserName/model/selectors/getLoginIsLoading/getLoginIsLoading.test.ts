import { StateSchema } from "app/providers/StoreProvider";
import { getLoginIsLoading } from "features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading";

describe('getLoginIsLoading.test', () => {
    test('should return login isLoading', async () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
