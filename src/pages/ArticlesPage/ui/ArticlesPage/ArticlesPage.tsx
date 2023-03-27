import { memo } from "react";
import { classNames } from "shared/lib/classNames";
import style from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    return (
        <div className={classNames(style.ArticlesPage, {}, [className])}>
            ArticlesPage
        </div>
    );
};
export default memo(ArticlesPage);
