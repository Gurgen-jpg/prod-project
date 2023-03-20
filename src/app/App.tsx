import React, { Suspense, useEffect } from 'react';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from 'shared/lib/classNames/ui/classNames';
import "./styles/index.scss";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "entities/User";
import { getInited } from 'features/AuthByUserName';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>

        </div>
    );
};

export default App;
