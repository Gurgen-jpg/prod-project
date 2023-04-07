import { useTranslation } from 'react-i18next';
import { memo, useMemo } from "react";
import { classNames } from 'shared/lib/classNames';
import { Select, SelectOption } from "shared/ui/Select/Select";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";
import style from './ArticleSortSelector.module.scss';

export interface ArticleSortSelectorProps {
    className?: string;
    sort?: ArticleSortField;
    order: SortOrder;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        onChangeSort,
        sort,
        onChangeOrder,
        order,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('ascending'),
        },
        {
            value: 'desc',
            content: t('descending'),
        },
    ], [t]);
    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED_AT,
            content: t('created at'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views'),
        },

    ], [t]);

    return (
        <div className={classNames(style.ArticleSortSelector, {}, [className])}>
            <Select options={orderOptions} label={t('by')} onChange={onChangeOrder} value={order} />
            <Select options={sortOptions} label={t('sort by')} onChange={onChangeSort} value={sort} />
        </div>
    );
});
