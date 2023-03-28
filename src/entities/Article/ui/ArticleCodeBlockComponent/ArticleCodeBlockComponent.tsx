import { classNames } from 'shared/lib/classNames';
import style from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = ({ className }: ArticleCodeBlockComponentProps) => {
    return (
        <div className={classNames(style.ArticleCodeBlockComponent, {}, [className])}>
            ArticleCodeBlockComponent
        </div>
    );
};
