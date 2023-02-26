import { classNames } from 'shared/lib/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from "react";
import style from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    autoFocus?: boolean;

}
export const Input = memo((props:InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [inFocus, setInFocus] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autoFocus) {
            setInFocus(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.currentTarget.value.length);
    };

    const onFocusHandler = () => {
        setInFocus(true);
    };

    const onBlurHandler = () => {
        setInFocus(false);
    };

    const onSelectHandler = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(style.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={style.placeholder}>
                    {`${placeholder} >`}
                </div>
            )}
            <div className={style.CaretWrapper}>
                <input
                    {...otherProps}
                    ref={ref}
                    type="text"
                    value={value}
                    onChange={onChangeHandler}
                    className={style.Input}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onSelect={onSelectHandler}
                />
                {inFocus && (
                    <span
                        className={style.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>

    );
});
