import { classNames } from "shared/lib/classNames/ui/classNames";
import { ButtonHTMLAttributes, FC } from "react";
import style from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
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
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        square,
        size,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [style[theme]]: true,
        [style.square]: square,
        [style[size]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(style.Button, { ...mods }, [className, style[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
