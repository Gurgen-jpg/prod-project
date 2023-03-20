import React, {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from "react-router-dom";
import { AppRoutesProps, routeConfig } from "shared/config/routConfig/routConfig";
import { PageLoader } from "widgets/PageLoader";
import { RequireAuth } from "app/providers/router/ui/RequireAuth";

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly
                    ? (
                        <RequireAuth>
                            {element}
                        </RequireAuth>
                    )
                    : { element }}
            />
        );
    }, []);
    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
            {/* {routes.map(({ path, element }) => ( */}
            {/*    <Route */}
            {/*        key={path} */}
            {/*        path={path} */}
            {/*        element={( */}
            {/*            <Suspense fallback={<PageLoader />}> */}
            {/*                <div className="page-wrapper"> */}
            {/*                    {element} */}
            {/*                </div> */}
            {/*            </Suspense> */}
            {/*        )} */}
            {/*    /> */}
            {/* ))} */}
        </Routes>
    );
});
