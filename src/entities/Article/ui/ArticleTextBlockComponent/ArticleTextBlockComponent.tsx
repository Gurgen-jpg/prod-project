import { classNames } from 'shared/lib/classNames';
import { memo } from "react";
import { Text } from "shared/ui";
import style from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from "../../model/types/article";

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
    return (
        <div className={classNames(style.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={style.title} />
            )}
            {block?.paragraphs?.map((paragraph) => <Text text={paragraph} key={paragraph} className={style.paragraph} />)}
        </div>
    );
});
