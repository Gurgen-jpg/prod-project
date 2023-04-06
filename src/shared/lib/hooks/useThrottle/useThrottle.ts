import { useCallback, useRef } from "react";

export function useThrottle(callback: (...arg: any[]) => void, delay: number) {
    const savedCallback = useRef(false);
    return useCallback((...arg: any[]) => {
        if (!savedCallback.current) {
            callback(...arg);
            savedCallback.current = true;
            setTimeout(() => {
                savedCallback.current = false;
            }, delay);
        }
    }, [delay, callback]);
}
