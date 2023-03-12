import { classNames, Mods } from "shared/lib/classNames/ui/classNames";
import {
    ButtonHTMLAttributes, memo, ReactNode,
} from "react";
import style from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline-red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted',
}

export enum ButtonSize {
    MEDIUM = 'medium',
    LARGE = 'large',
    XLARGE = 'xlarge',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.MEDIUM,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [style[theme]]: true,
        [style.square]: square,
        [style[size]]: true,
        [style.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(style.Button, { ...mods }, [className, style[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
