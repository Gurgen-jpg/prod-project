import { classNames } from 'shared/lib/classNames';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { Button, Input, Text } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import style from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}
export const ProfileCard = ({ className }:ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(style.ProfileCard, {}, [className])}>
            <div className={style.header}>
                <Text title={t('Profile')} />
                <Button theme={ButtonTheme.OUTLINE}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={style.data}>
                <Input
                    value={data?.firstname}
                    placeholder={t('Your name')}
                    className={style.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    className={style.input}
                />

            </div>
        </div>
    );
};
