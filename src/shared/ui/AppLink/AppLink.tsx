import { classNames } from "shared/lib/classNames/ui/classNames";
import { Link, LinkProps } from "react-router-dom";
import { FC } from 'react';
import style from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children,
        className,
        theme = AppLinkTheme.PRIMARY,
        to,
        ...otherProps
    } = props;
    return (
        <Link
            className={classNames(style.AppLink, {}, [className, style[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
