import React, { memo, SVGProps } from "react";
import { classNames } from "shared/lib/classNames";
import style from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, Svg }: IconProps) => {
    return (
        <Svg className={classNames(style.Icon, {}, [className])} />
    );
});
