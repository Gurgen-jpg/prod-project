import React from 'react';
import {Link} from 'react-router-dom';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from 'shared/classNames/classNames';
import './../app/styles/index.scss';
import {AppRouter} from "app/providers/router";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>theme</button>
            <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <AppRouter/>
        </div>
    );
};

export default App;