import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { StateSchema } from "app/providers/StoreProvider";
import { getProfileFirstName } from "entities/Profile";

describe('getProfileFirstname.test', () => {
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
        expect(getProfileFirstName(state as StateSchema)).toEqual('Gurgen');
    });
    test('should work with empty state', async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFirstName(state as StateSchema)).toBe('');
    });
});
