import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

const HomeAsync = React.lazy(() => import('./pages/Home'))
const AboutAsync = React.lazy(() => import('./pages/About'))



const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>theme</button>
            <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/home'} element={<HomeAsync/>}/>
                    <Route path={'/about'} element={<AboutAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;