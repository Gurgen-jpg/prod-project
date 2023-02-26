import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui';
import { Input } from 'shared/ui/Input/ui/Input';
import style from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}
export const LoginForm = ({ className }:LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(style.LoginForm, {}, [className])}>
            <Input type="text" className={style.input} placeholder={t("login")} autoFocus />
            <Input type="text" className={style.input} placeholder={t("password")} />
            <Button className={style.loginBtn}>
                {t('login')}
            </Button>
        </div>
    );
};
