import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/ui/classNames';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from "features/AuthByUserName";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { AppLink, Text } from "shared/ui";
import { TextSize, TextTheme } from "shared/ui/Text/Text";
import { RoutePath } from 'shared/config/routConfig/routConfig';
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import style from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseAuthModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowAuthModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(style.Navbar, {}, [className])}>
                <Text
                    title={t('Gurgen app')}
                    size={TextSize.L}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={style.createArticleLink}
                >
                    {t('Create article')}
                </AppLink>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={style.link}
                    onClick={onLogout}
                >
                    {t('sing out')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(style.Navbar, {}, [className])}>

            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={style.link}
                onClick={onShowAuthModal}
            >
                {t('sing in')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    onClose={onCloseAuthModal}
                    isOpen={isAuthModal}
                />
            )}
        </header>
    );
});
