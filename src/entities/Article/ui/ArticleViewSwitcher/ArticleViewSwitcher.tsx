import { ArticleView } from "entities/Article";
import { memo } from "react";
import { classNames } from "shared/lib/classNames";
import PlateIcon from 'shared/assets/icons/plate.svg';
import ListIcon from 'shared/assets/icons/list.svg';

import { Icon } from "shared/ui/Icon/Icon";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import style from './ArticleViewSwitcher.module.scss';

export interface ArticleViewSwitcherProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: PlateIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },

];

export const ArticleViewSwitcher = memo((props: ArticleViewSwitcherProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;

    const onClickHandler = (newView: ArticleView) => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(style.ArticleViewSwitcher, {}, [className])}>
            {
                viewTypes.map((viewType) => {
                    return (
                        <Button
                            theme={ButtonTheme.CLEAR}
                            onClick={() => onClickHandler(viewType.view)}
                            // className={classNames('', { [style.notSelected]: view !== viewType.view }, [])}
                            key={viewType.view}
                        >
                            <Icon
                                Svg={viewType.icon}
                                className={classNames('', { [style.selected]: view === viewType.view })}
                            />
                        </Button>
                    );
                })
            }
        </div>
    );
});
