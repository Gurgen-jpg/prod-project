import { useCallback, useMemo, useState } from "react";

interface useHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type useHoverResult = [boolean, useHoverBind];

export const useHover = (): useHoverResult => {
    const [hover, setHover] = useState(false);

    const onMouseEnter = useCallback(() => setHover(true), []);
    const onMouseLeave = useCallback(() => setHover(false), []);

    return useMemo(() => ([
        hover,
        {
            onMouseEnter,
            onMouseLeave,
        }]
    ), [hover, onMouseEnter, onMouseLeave]);
};
