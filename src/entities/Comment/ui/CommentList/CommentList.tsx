import { useTranslation } from 'react-i18next';
import { memo } from "react";
import { classNames } from "shared/lib/classNames";
import { Text } from "shared/ui";
import { CommentCard } from "entities/Comment/ui/CommentCard/CommentCard";
import style from './CommentList.module.scss';
import { CommentType } from "../../model/type/comment/commentType";

export interface CommentListProps {
    className?: string;
    comments?: Array<CommentType>;
    isLoading?: boolean;
}

export const CommentList = memo(({
    className,
    comments,
    isLoading,
}: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(style.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }
    return (
        <div className={classNames(style.CommentList, {}, [className])}>
            {
                comments?.length
                    ? comments?.map((comment: CommentType) => (
                        <CommentCard comment={comment} className={style.card} key={comment.id} />
                    ))
                    : <Text text={t('No comments')} />
            }
        </div>
    );
});
