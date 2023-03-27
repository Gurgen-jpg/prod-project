import { memo } from "react";
import { classNames } from "shared/lib/classNames";
import style from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    return (
        <div className={classNames(style.ArticlesDetailsPage, {}, [className])}>
            ArticlesDetailsPage
        </div>
    );
};

export default memo(ArticlesDetailsPage);
