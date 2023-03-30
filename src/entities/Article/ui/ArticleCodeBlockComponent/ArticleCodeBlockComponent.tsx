import { classNames } from 'shared/lib/classNames';
import { memo } from "react";
import style from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = memo(({ className }: ArticleCodeBlockComponentProps) => {
    return (
        <div className={classNames(style.ArticleCodeBlockComponent, {}, [className])}>
            ArticleCodeBlockComponent
        </div>
    );
});
