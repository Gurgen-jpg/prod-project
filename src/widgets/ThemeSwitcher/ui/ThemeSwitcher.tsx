import {classNames} from 'shared/lib/classNames/classNames';
import style from './ThemeSwitcher.module.scss';
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import ThemeLight from 'shared/assets/icons/ThemeLight.svg';
import ThemeDark from 'shared/assets/icons/ThemeDark.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(style.Button, {}, [className])}
            onClick={toggleTheme}
        >

            {theme === Theme.LIGHT ? <ThemeLight /> : <ThemeDark/>}
        </Button>
    );
};
