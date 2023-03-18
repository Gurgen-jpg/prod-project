import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { updateProfileData } from "./updateProfileData";
import { Profile, ValidateProfileError } from "../../types/Profile";

// jest.mock('axios');

const data:Profile = {
    username: 'name',
    age: 33,
    country: Country.UK,
    lastname: 'lastname',
    firstname: 'firstname',
    city: 'someone',
    currency: Currency.EUR,
};

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    test('validate error', async () => {
        const data:Profile = {
            username: '',
            age: 33,
            country: Country.UK,
            lastname: 'lastname',
            firstname: 'firstname',
            city: 'someone',
            currency: Currency.EUR,
        };
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        // thunk.api.put.mockReturnValue(Promise.re());
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        console.log('payload ==> ', result.payload);
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            // ValidateProfileError.SERVER_ERROR,
        ]);
    });
});
