import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import {
    profileActions, profileReducer,
} from "./profileSlice";
import { Profile, ProfileSchema, ValidateProfileError } from "../types/profile";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

describe('profileSlice.test', () => {
    const data: Profile = {
        username: '',
        age: 33,
        country: Country.UK,
        lastname: 'lastname',
        firstname: 'firstname',
        city: 'someone',
        currency: Currency.EUR,
    };

    test('set readonly ', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
            .toEqual({ readonly: true });
    });
    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                form: data,
                data,
                validateError: undefined,
            });
    });
    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ firstname: 'newName' })))
            .toEqual({
                form: { ...data, firstname: 'newName' },
            });
    });
    test('test update Profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({
                isLoading: true,
                validateError: undefined,
            });
    });
    test('test update Profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false,
                validateError: undefined,
                readonly: true,
                data,
                form: data,
            });
    });
});
