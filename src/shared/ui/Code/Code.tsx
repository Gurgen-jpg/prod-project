import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import Copy from "../../assets/icons/copy.svg";
import style from './Code.module.scss';

interface CodeProps {
    className?: string;
    codeText?: string;
}

export const Code = memo(({
    className,
    codeText,
}: CodeProps) => {
    const { t } = useTranslation();

    const onCopyHandler = useCallback(() => {
        if (codeText) navigator.clipboard.writeText(codeText);
    }, [codeText]);

    return (
        <pre className={classNames(style.Code, {}, [className])}>
            <Button type="button" className={style.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopyHandler}>
                <Copy className={style.copyIcon} />
            </Button>
            <code>
                {codeText}
            </code>
        </pre>
    );
});
