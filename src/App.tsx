import React, { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss';

const HomeAsync = React.lazy(() => import('./pages/Home'))
const AboutAsync = React.lazy(() => import('./pages/About'))


const App = () => {
    return (
        <div className='app'>
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