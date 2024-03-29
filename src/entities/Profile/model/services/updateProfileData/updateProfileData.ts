import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { validateProfile } from "entities/Profile/model/services/validateProfile/validateProfile";
import { getProfileForm } from "entities/Profile/model/selectors/getProfileForm/getProfileForm";
import { Profile, ValidateProfileError } from "../../types/profile";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const {
            rejectWithValue,
            extra,
            getState,
        } = thunkApi;

        const formData = getProfileForm(getState());
        const errors = validateProfile(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
