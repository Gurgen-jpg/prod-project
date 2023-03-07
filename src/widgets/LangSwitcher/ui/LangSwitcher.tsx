import { classNames } from 'shared/lib/classNames/ui/classNames';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { memo } from "react";

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation('translation');
    const onClickHandler = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={onClickHandler}
        >
            {t(short ? 'lang' : 'language')}

        </Button>
    );
});
