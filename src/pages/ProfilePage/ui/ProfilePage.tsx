import { profileReducer } from "entities/Profile";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const reducers = {
    profile: profileReducer,
} as ReducersList;

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                {t('ProfilePage')}
            </div>
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
