import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from "react";
import { classNames } from "shared/lib/classNames";
import { AppLink, Button, Text } from "shared/ui";
import { Icon } from 'shared/ui/Icon/Icon';
import Views from 'shared/assets/icons/views.svg';
import { Card } from "shared/ui/Card/Card";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routConfig/routConfig";
import style from './ArticleListItem.module.scss';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    articleView: ArticleView;
    target?: HTMLAttributeAnchorTarget;

}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        articleView,
        target,
    } = props;
    const { t } = useTranslation();
    // const navigate = useNavigate();
    const types = <Text className={style.types} text={article.type.join(',')} />;
    const views = (
        <>
            <Text className={style.views} text={String(article.views)} />
            <Icon Svg={Views} className={style.viewIcon} />
        </>
    );
    // const onOpenArticle = useCallback(() => {
    //     navigate(RoutePath.article_details + article.id);
    // }, [navigate, article.id]);

    const firstTextBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    if (articleView === ArticleView.BIG) {
        return (
            <Card className={classNames(style.ArticleListItem, {}, [className, style[articleView]])}>
                <div className={style.header}>
                    <Avatar size={30} className={style.avatar} src={article.user.avatar} />
                    <Text text={article.user.username} className={style.username} />
                    <Text text={article.createdAt} className={style.createdAt} />
                </div>
                <Text title={article.title} className={style.title} />
                {types}
                <img src={article.img} alt={article.title} className={style.img} />
                {firstTextBlock && <ArticleTextBlockComponent block={firstTextBlock} className={style.textBlock} />}
                <div className={style.footer}>
                    <AppLink
                        to={RoutePath.article_details + article.id}
                        target={target}
                    >
                        <Button
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t('continue reading')}
                        </Button>
                    </AppLink>
                    {views}
                </div>
            </Card>

        );
    }

    return (
        <AppLink
            to={RoutePath.article_details + article.id}
            className={classNames(style.ArticleListItem, {}, [className, style[articleView]])}
            target={target}
        >
            <Card>
                <div className={style.card}>
                    <div className={style.wrapper}>
                        <img className={style.image} src={article?.img} alt={article.title} />
                        <Text className={style.date} text={article.createdAt} />
                    </div>
                    <div className={style.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text className={style.title} text={article.title} />
                </div>
            </Card>
        </AppLink>

    );
});
