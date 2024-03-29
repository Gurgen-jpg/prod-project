import { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from 'shared/lib/classNames';
import style from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outline',
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        ...otherProps
    } = props;
    return (
        <div className={classNames(style.Card, {}, [className, style[theme]])} {...otherProps}>
            {children}
        </div>
    );
});
