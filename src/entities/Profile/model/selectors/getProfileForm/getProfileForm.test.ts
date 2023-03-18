import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "entities/Profile/model/selectors/getProfileForm/getProfileForm";

describe('getProfileForm.test', () => {
    test('should return form', async () => {
        const form = {
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
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});
