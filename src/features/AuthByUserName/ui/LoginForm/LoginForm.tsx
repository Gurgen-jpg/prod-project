import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, Input, Text } from 'shared/ui';
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "features/AuthByUserName/model/slice/loginSlice";
import { TextTheme } from "shared/ui/Text/Text";

import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';

import style from './LoginForm.module.scss';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducer = {
    loginForm: loginReducer,
} as ReducersList;

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const onClickHandler = useCallback(async () => {
        const result = await dispatch(loginByUserName({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, username, password]);

    return (
        <DynamicModuleLoader reducers={initialReducer}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
