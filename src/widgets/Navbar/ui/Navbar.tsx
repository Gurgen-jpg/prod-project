import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/ui/classNames';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from "features/AuthByUserName";
import style from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseAuthModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(style.Navbar, {}, [className])}>

            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={style.link}
                onClick={() => setIsAuthModal(true)}
            >
                {t('sing in')}
            </Button>
            <LoginModal
                onClose={onCloseAuthModal}
                isOpen={isAuthModal}
            />
        </div>
    );
};
