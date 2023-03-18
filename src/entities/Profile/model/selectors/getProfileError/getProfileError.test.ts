import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "entities/Profile";

describe('getProfileError.test', () => {
    test('should return error', async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state', async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toBe("");
    });
});
