import { useState } from "react";

export default function Counter() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    function updateCount1(amount) {
        setCount1(currentCount => {
            return currentCount + amount;
        })
    }
    function updateCount2(amount) {
        setCount2(currentCount => {
            return currentCount + amount;
        })
    }
    function updateCount3(amount) {
        setCount3(currentCount => {
            return currentCount + amount;
        })
    }

    function resetCount(amount) {
        setCount1(currentCount => {
            return currentCount === amount;
        })
    }

    return (
        <>
            <button className="bg-cyan-500 " onClick={() => resetCount(0)}>Reset</button>
            <div className="flex">
                <h1 className="bg-yellow-300 m-1 px-3 rounded">{count1}</h1>
                <button className="bg-red-600 hover:bg-purple-700 text-white font-bold m-1 px-3 rounded" onClick={() => updateCount1(-1)}>-</button>
                <button className="bg-lime-400 hover:bg-purple-700 text-white font-bold m-1 px-3 rounded" onClick={() => updateCount1(1)}>+</button>
            </div>
            <div className="flex">
                <h1 className="bg-yellow-300 m-1 px-3 rounded">{count2}</h1>
                <button className="bg-red-600 hover:bg-purple-700 text-white font-bold m-1 px-3 rounded" onClick={() => updateCount2(-1)}>-</button>
                <button className="bg-lime-400 hover:bg-purple-700 text-white font-bold m-1 px-3 rounded" onClick={() => updateCount2(1)}>+</button>
            </div>
            <div className="flex">
                <h1 className="bg-yellow-300 m-1 px-3 rounded">{count3}</h1>
                <button className="bg-red-600 hover:bg-purple-700 text-white font-bold m-1 px-3 rounded" onClick={() => updateCount3(-1)}>-</button>
                <button className="bg-lime-400 hover:bg-purple-700 text-white font-bold m-1 px-3 rounded" onClick={() => updateCount3(1)}>+</button>
            </div>
        </>
    );
}