import { classNames } from "shared/lib/classNames/ui/classNames";
import { ButtonHTMLAttributes, FC } from "react";
import style from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(style.Button, {}, [className, style[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
