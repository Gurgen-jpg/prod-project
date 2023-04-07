import { ReactNode, useCallback } from "react";
import { classNames } from 'shared/lib/classNames';
import { Card, CardTheme } from "shared/ui/Card/Card";
import { ArticleType } from "entities/Article/model/types/article";
import style from './Tabs.module.scss';

export interface TabsItem<T extends ArticleType> {
    value: T;
    content: ReactNode;
}

export interface TabsProps<T extends ArticleType> {
    className?: string;
    tabs: TabsItem<T>[];
    value?: T;
    onTabClick: (tab: T) => void;
}

export const Tabs = <T extends ArticleType>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;

    const onClickHandler = useCallback((tab: TabsItem<T>) => () => {
        onTabClick(tab.value as T);
    }, [onTabClick]);

    return (
        <div className={classNames(style.Tabs, {}, [className])}>
            {tabs?.map((tab, index) => (
                <Card
                    key={index}
                    className={style.tab}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
                    onClick={onClickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
