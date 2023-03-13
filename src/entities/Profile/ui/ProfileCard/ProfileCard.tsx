import { classNames } from 'shared/lib/classNames';
import { useTranslation } from "react-i18next";
import { Input, Text } from "shared/ui";
import { Loader } from "shared/ui/Loader/Loader";
import { Mods } from "shared/lib/classNames/ui/classNames";
import { TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Select } from "shared/ui/Select/Select";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country } from "entities/Country/model/types/country";
import { CountrySelect } from "entities/Country";
import { Profile } from "../../model/types/profile";
import style from './ProfileCard.module.scss';

interface ProfileCardProps {
    onChangeLastname?: (value: string) => void;
    onChangeFirstname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?:(value:string) => void;
    onChangeAvatar?:(value:string) => void;
    onChangeCurrency?:(value:Currency) => void;
    onChangeCountry?:(value:Country) => void;
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
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [style.loading]: true,
        [style.editing]: !readonly,
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
        <div className={classNames(style.ProfileCard, mods, [className])}>
            <div className={style.avatarWrapper}>
                {data?.avatar && (
                    <Avatar
                        src={data?.avatar}
                        alt={t('avatar picture')}
                    />
                )}
            </div>
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
                    onChange={onChangeCity}
                    readOnly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Username')}
                    className={style.input}
                    onChange={onChangeUsername}
                    readOnly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Avatar')}
                    className={style.input}
                    onChange={onChangeAvatar}
                    readOnly={readonly}
                />
                <CurrencySelect
                    className={style.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={style.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
