import { classNames } from 'shared/lib/classNames';
import { useTranslation } from "react-i18next";
import { Button, Input, Text } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import { Loader } from "shared/ui/Loader/Loader";
import { Mods } from "shared/lib/classNames/ui/classNames";
import { TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Profile } from "../../model/types/profile";
import style from './ProfileCard.module.scss';

interface ProfileCardProps {
    onChangeLastname: (value: string) => void;
    onChangeFirstname: (value: string) => void;
    onChangeAge: (value: string) => void;
    onChangeCountry: (value: string) => void;
    onChangeUsername:(value:string) => void;
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        data,
        error,
        isLoading,
        className,
        readonly,
        onChangeLastname,
        onChangeFirstname,
        onChangeAge,
        onChangeCountry,
        onChangeUsername,
    } = props;
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [style.loading]: true,
    };

    if (isLoading) {
        return (
            <div className={classNames(style.ProfileCard, { ...mods }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(style.ProfileCard, {}, [className, style.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Something went wrong')}
                    text={t('Error in login data')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(style.ProfileCard, {}, [className])}>
            <div className={style.data}>
                <Input
                    value={data?.firstname}
                    placeholder={t('Your name')}
                    className={style.input}
                    onChange={onChangeFirstname}
                    readOnly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    className={style.input}
                    onChange={onChangeLastname}
                    readOnly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('age')}
                    className={style.input}
                    onChange={onChangeAge}
                    readOnly={readonly}
                />
                <Input
                    value={data?.country}
                    placeholder={t('Your country')}
                    className={style.input}
                    onChange={onChangeCountry}
                    readOnly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Username')}
                    className={style.input}
                    onChange={onChangeUsername}
                    readOnly={readonly}
                />

            </div>
        </div>
    );
};
