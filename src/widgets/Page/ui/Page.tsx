import {
    memo, MutableRefObject, ReactNode, UIEvent, useRef,
} from "react";
import { classNames } from 'shared/lib/classNames';
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { scrollSliceActions } from "features/scrollSaver/slices/scrollSlice";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { getScrollByPath } from "features/scrollSaver/selectors/getScrollByPath/getScrollByPath";
import { StateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";
import style from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollByPath = useSelector((state: StateSchema) => getScrollByPath(state, pathname));
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollByPath;
    });

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    const scrollSaverHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSliceActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    return (
        <section
            ref={wrapperRef}
            className={classNames(style.Page, {}, [className])}
            onScroll={scrollSaverHandler}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
