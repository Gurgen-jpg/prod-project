import { classNames } from 'shared/lib/classNames';
import { memo } from "react";
import { ArticleImageBlock } from "entities/Article/model/types/article";
import { Text } from "shared/ui";
import style from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({
    className,
    block,
}: ArticleImageBlockComponentProps) => {
    return (
        <div className={classNames(style.ArticleImageBlockComponent, {}, [className])}>
            <img src={block?.src} alt={block?.title} className={style.img} />
            {block.title && <Text text={block.title} />}
        </div>
    );
});
