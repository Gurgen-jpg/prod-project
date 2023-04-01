import { useTranslation } from 'react-i18next';
import { memo } from "react";
import { classNames } from 'shared/lib/classNames';
import { Avatar } from "shared/ui/Avatar/Avatar";
import { AppLink, Text } from "shared/ui";
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { RoutePath } from "shared/config/routConfig/routConfig";
import style from './CommentCard.module.scss';
import { CommentType } from "../../model/type/comment/commentType";

export interface CommentCardProps {
    className?: string;
    comment?: CommentType;
    isLoading?: boolean;
}

export const CommentCard = memo(({
    className,
    comment,
    isLoading,
}: CommentCardProps) => {
    const {
        t,
    } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(style.CommentCard, {}, [className, style.loading])}>
                <div className={style.header}>
                    <Skeleton border="50%" height={30} width={30} />
                    <Skeleton height={30} width={200} />
                </div>
                <Skeleton height={50} width={300} />
                <Skeleton height={20} width="100%" />
            </div>
        );
    }
    return (
        <div className={classNames(style.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={style.header}>
                {comment?.user?.avatar && <Avatar size={30} src={comment?.user?.avatar} />}
                <Text title={comment?.user?.username} />
            </AppLink>
            <Text text={comment?.text} />
            {comment?.text}
        </div>
    );
});
