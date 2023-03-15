import { classNames } from 'shared/lib/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from "react-i18next";
import { memo, useCallback } from 'react';
import { Country } from "entities/Country";
import style from './CountrySelect.module.scss';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.UK, content: Country.UK },
    { value: Country.USA, content: Country.USA },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props:CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            label={t('Choose country')}
            className={classNames(style.wrapper, {}, [className])}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
