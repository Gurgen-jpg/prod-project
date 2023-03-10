import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/ui/classNames';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from "features/AuthByUserName";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import style from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseAuthModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowAuthModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, []);

    if (authData) {
        return (
            <div className={classNames(style.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={style.link}
                    onClick={onLogout}
                >
                    {t('sing out')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(style.Navbar, {}, [className])}>

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
        </div>
    );
});
