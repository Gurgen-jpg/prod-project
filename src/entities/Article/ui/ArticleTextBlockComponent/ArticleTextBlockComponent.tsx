import { classNames } from 'shared/lib/classNames';
import style from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent = ({ className }: ArticleTextBlockComponentProps) => {
    return (
        <div className={classNames(style.ArticleTextBlockComponent, {}, [className])}>
            ArticleTextBlockComponent
        </div>
    );
};
