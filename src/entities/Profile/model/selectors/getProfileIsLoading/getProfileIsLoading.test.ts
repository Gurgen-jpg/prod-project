import { StateSchema } from "app/providers/StoreProvider";
import { getProfileIsLoading } from "entities/Profile";

describe('getProfileIsLoading.test', () => {
    test('should return isLoading', async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toBe(false);
    });
});
