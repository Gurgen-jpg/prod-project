import { memo } from "react";
import { classNames } from "shared/lib/classNames";
import style from './Code.module.scss';

interface CodeProps {
    className?: string;
    codeText: string;
}

export const Code = memo(({ className, codeText }: CodeProps) => {
    return (
        <pre>
            <code className={classNames(style.Code, {}, [className])}>
                {codeText}
            </code>
        </pre>
    );
});
