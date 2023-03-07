import { classNames } from 'shared/lib/classNames/ui/classNames';
import React, { memo } from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import ThemeLight from 'shared/assets/icons/ThemeLight.svg';
import ThemeDark from 'shared/assets/icons/ThemeDark.svg';
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >

            {theme === Theme.LIGHT ? <ThemeLight /> : <ThemeDark />}
        </Button>
    );
});
