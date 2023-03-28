import { CSSProperties, memo } from "react";
import { classNames } from "shared/lib/classNames";
import style from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props : SkeletonProps) => {
    const {
        height,
        width,
        className,
        border,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(style.Skeleton, {}, [className])}
            style={styles}
        />

    );
});
