import { useTranslation } from 'react-i18next';
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames";
import { Button, Input } from 'shared/ui';
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from 'react-redux';
import { getAddNewCommentError, getAddNewCommentText } from 'features/addNewComment/model/selectors/addNewCommentSelectors';
import { addNewCommentActions, addNewCommentReducer } from "../../model/slice/addNewCommentSlice";
import style from './AddNewComment.module.scss';

export interface AddNewCommentProps {
    className?: string;
    onSendNewComment: (text: string) => void;
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer,
};

const AddNewComment = memo(({
    className,
    onSendNewComment,
}: AddNewCommentProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddNewCommentText);
    const error = useSelector(getAddNewCommentError);

    const onChangeComment = useCallback((value: string) => {
        dispatch(addNewCommentActions.setNewComment(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendNewComment(text);
        onChangeComment('');
    }, [onSendNewComment, onChangeComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(style.AddNewComment, {}, [className])}>
                <Input
                    placeholder={t('comment text')}
                    onChange={onChangeComment}
                    value={text}
                />
                <Button
                    onClick={onSendHandler}
                >
                    {t('send')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
});
export default AddNewComment;
