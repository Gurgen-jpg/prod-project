import { StateSchema } from "app/providers/StoreProvider";
import { getProfileReadonly } from "entities/Profile";

describe('getProfileReadonly.test', () => {
    test('should return readonly', async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toBe(false);
    });
});
