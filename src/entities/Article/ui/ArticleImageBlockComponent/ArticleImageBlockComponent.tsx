import { classNames } from 'shared/lib/classNames';
import style from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponentProps) => {
    return (
        <div className={classNames(style.ArticleImageBlockComponent, {}, [className])}>
            ArticleImageBlockComponent
        </div>
    );
};
