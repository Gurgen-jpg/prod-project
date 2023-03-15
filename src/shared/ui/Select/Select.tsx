import { ChangeEvent, memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames";
import style from './Select.module.scss';

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
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
            onChange(e.currentTarget.value);
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
});
