import { classNames } from 'shared/lib/classNames';
import { Mods } from 'shared/lib/classNames/ui/classNames';
import { CSSProperties, useMemo } from "react";
import style from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props:AvatarProps) => {
    const {
        className,
        src,
        alt,
        size = 100,
    } = props;
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), []);

    const mods:Mods = {};
    return (
        <img
            className={classNames(style.Avatar, mods, [className])}
            style={styles}
            src={src}
            alt={alt}
        />
    );
};
