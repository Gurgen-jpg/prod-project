import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "entities/Profile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

describe('getProfileData.test', () => {
    test('should return profile', async () => {
        const data = {
            username: 'profile',
            age: 33,
            country: Country.UK,
            lastname: 'Sarkis',
            currency: Currency.USD,
            firstname: 'Gurgen',
            city: 'Rostov',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
