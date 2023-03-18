import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ValidateProfileError } from "../../types/profile";
import { validateProfile } from "./validateProfile";

describe('validateProfile.test', () => {
    const data = {
        username: 'profile',
        age: 33,
        country: Country.UK,
        lastname: 'Sarkis',
        currency: Currency.USD,
        firstname: 'Gurgen',
        city: 'Rostov',
    };
    test('success', async () => {
        const result = validateProfile(data);

        expect(result).toEqual([]);
    });
    test('without firstname & username', () => {
        const result = validateProfile({ ...data, firstname: '', username: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('without payload', () => {
        const result = validateProfile(undefined);
        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });
    test('without country', async () => {
        const result = validateProfile({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('incorrect age', () => {
        const result = validateProfile({ ...data, age: NaN });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
});
