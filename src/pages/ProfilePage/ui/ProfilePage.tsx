import {
    fetchProfileData, getProfileError, getProfileIsLoading, getProfileReadonly, getProfileValidateError, profileActions, ProfileCard, profileReducer,
} from "entities/Profile";
import { classNames } from "shared/lib/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader";
import { getProfileForm } from "entities/Profile/model/selectors/getProfileForm/getProfileForm";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { Page, Text } from "shared/ui";
import { TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { useParams } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import style from './ProfilePage.module.scss';

const reducers = {
    profile: profileReducer,
} as ReducersList;

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profilePage');
    const { id } = useParams<{ id: string }>();
    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const errors = useSelector(getProfileValidateError);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('server error'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('country error'),
        [ValidateProfileError.INCORRECT_AGE]: t('age error'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('user data error'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ firstname: value }));
    }, [dispatch]);
    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);
    const onChangeAge = useCallback((value: string) => {
        if (value === '') {
            dispatch(profileActions.updateProfile({ age: Number(0) }));
        } else if (parseInt(value, 10)) {
            dispatch(profileActions.updateProfile({ age: Number(value) }));
        }
    }, [dispatch]);
    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);
    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value: string) => {
        dispatch((profileActions.updateProfile({ avatar: value })));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch((profileActions.updateProfile({ currency: value })));
    }, [dispatch]);

    const onChangeCountry = useCallback((value: Country) => {
        dispatch((profileActions.updateProfile({ country: value })));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(style.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
                {errors?.length && errors.map((err) => (
                    // @ts-ignore
                    <Text theme={TextTheme.ERROR} text={validateErrorTranslates[err]} key={err} />
                ))}
                <ProfileCard
                    data={form}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
