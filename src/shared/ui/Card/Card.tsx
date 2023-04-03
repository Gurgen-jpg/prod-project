import { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from 'shared/lib/classNames';
import style from './Card.module.scss';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;
    return (
        <div className={classNames(style.Card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
});
