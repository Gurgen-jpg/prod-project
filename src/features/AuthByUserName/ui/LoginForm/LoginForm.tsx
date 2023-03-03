import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, Input, Text } from 'shared/ui';
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "features/AuthByUserName/model/slice/loginSlice";
import { TextTheme } from "shared/ui/Text/Text";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import style from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}
export const LoginForm = memo(({ className }:LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loginForm = useSelector(getLoginState);
    const {
        username,
        password,
        isLoading,
        error,
    } = loginForm;

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const onClickHandler = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(style.LoginForm, {}, [className])}>
            <Text text={t('Auth form')} />
            {error && <Text text={t('wrong password or username')} theme={TextTheme.ERROR} />}
            <Input
                type="text"
                onChange={onChangeUsername}
                value={username}
                className={style.input}
                placeholder={t("login")}
                autoFocus
            />
            <Input
                type="text"
                className={style.input}
                placeholder={t("password")}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={style.loginBtn}
                onClick={onClickHandler}
                disabled={isLoading}
            >
                {t('login')}
            </Button>
        </div>
    );
});
