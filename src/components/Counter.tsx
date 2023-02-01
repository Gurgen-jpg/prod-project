import {useState} from "react";
import './Counter.scss';

export const Counter = () => {
    const setPlus = () => {
        setCount(count + 1)
    }
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button
            onClick={setPlus}
            >setCount
            </button>
        </div>
    )
}