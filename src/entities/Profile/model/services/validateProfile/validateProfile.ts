import { Profile } from "entities/Profile";
import { ValidateProfileError } from "entities/Profile/model/types/profile";

export const validateProfile = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        age, firstname, username, country,
    } = profile;
    const errors: ValidateProfileError[] = [];

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!username || !firstname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }
    return errors;
};
