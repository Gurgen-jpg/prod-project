import {
    fetchProfileData, getProfileData, getProfileError, getProfileIsLoading,
    getProfileReadonly, profileActions, ProfileCard, profileReducer,
} from "entities/Profile";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader";
import { getProfileForm } from "entities/Profile/model/selectors/getProfileForm/getProfileForm";
import style from './ProfilePage.module.scss';

const reducers = {
    profile: profileReducer,
} as ReducersList;

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ firstname: value }));
    }, [dispatch]);
    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);
    const onChangeAge = useCallback((value: string) => {
        if (value === '') {
            dispatch(profileActions.updateProfile({ age: Number(0) }));
        } else
        if (parseInt(value, 10)) {
            dispatch(profileActions.updateProfile({ age: Number(value) }));
        }
    }, [dispatch]);
    const onChangeCountry = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);
    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value: string) => {
        dispatch((profileActions.updateProfile({ avatar: value })));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(style.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={form}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCountry}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
