import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    function updateCount(amount) {
        setCount(currentCount => {
            return currentCount + amount;
        })
    }

    return (
        <>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded" onClick={() => updateCount(-1)}>-</button>
            <h1>{count}</h1>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded" onClick={() => updateCount(1)}>+</button>
        </>
    );
}