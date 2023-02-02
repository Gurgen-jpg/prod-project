import {useState} from "react";
import style from './Counter.module.scss';

export const Counter = () => {
    const setPlus = () => {
        setCount(count + 1)
    }
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button
                className={style.button}
            onClick={setPlus}
            >setCount
            </button>
        </div>
    )
}