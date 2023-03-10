import { fetchProfileData, ProfileCard, profileReducer } from "entities/Profile";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useEffect } from "react";
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

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(style.ProfilePage, {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
