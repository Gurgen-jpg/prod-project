import { ChangeEvent, useMemo } from "react";
import { classNames } from "shared/lib/classNames";
import style from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const optionsList = useMemo(() => {
        return options?.map((option) => (
            <option
                key={option.value}
                className={style.option}
                value={option.value}
            >
                {option.content}
            </option>
        ));
    }, []);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.currentTarget.value as T);
        }
    };

    return (
        <div className={classNames(style.wrapper, {}, [className])}>
            <div className={style.label}>
                {label && <span>{`${label}>`}</span>}
            </div>
            <select
                disabled={readonly}
                className={style.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
};
