import { useTranslation } from 'react-i18next';
import { memo, useMemo } from "react";
import { Tabs } from "shared/ui";
import { classNames } from "shared/lib/classNames";
import { ArticleType } from "../../model/types/article";

export interface ArticleLIstTabsProps {
    className?: string;
    onChange: (tab: ArticleType) => void;
    value?: ArticleType;
}

export const ArticleListTabs = memo(({
    className,
    value,
    onChange,
}: ArticleLIstTabsProps) => {
    const { t } = useTranslation();
    const typeTabs = useMemo(() => [{
        value: ArticleType.ALL,
        content: t('all'),
    },
    {
        value: ArticleType.IT,
        content: t('it'),
    },
    {
        value: ArticleType.ECONOMICS,
        content: t('economics'),
    },
    {
        value: ArticleType.SCIENCE,
        content: t('science'),
    }], []);
    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            onTabClick={onChange}
            value={value}
        />
    );
});
