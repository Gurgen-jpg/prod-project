import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateError } from "entities/Profile";
import { ValidateProfileError } from "../../types/profile";

describe('getProfileValidateError.test', () => {
    test('should return error', async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileError.INCORRECT_COUNTRY],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('should work with empty state', async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateError(state as StateSchema)).toBe(undefined);
    });
});
