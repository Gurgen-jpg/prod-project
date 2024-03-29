import { FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKeys } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducersList = {
    [name in StateSchemaKeys]?: Reducer
}

type ReducerListEntry = [StateSchemaKeys, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = false,
    } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        const mountedReducer = store.reducerManager?.getReducerMap();
        Object.entries(reducers)
            .forEach(([name, reducer]) => {
                const mounted = Boolean(mountedReducer[name as StateSchemaKeys]);
                if (!mounted) {
                    store.reducerManager.add(name as StateSchemaKeys, reducer);
                    dispatch({ type: `@INIT ${name} reducer` });
                }
                // store.reducerManager.add(name as StateSchemaKeys, reducer);
                // dispatch({ type: `@INIT ${name} reducer` });
            });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers)
                    .forEach(([name]) => {
                        store.reducerManager.remove(name as StateSchemaKeys);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    });
            }
        };
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
