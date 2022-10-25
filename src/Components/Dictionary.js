import { useEffect, useState } from "react";

function Dictionary() {
    const [word, setWord] = useState('Hello');

    useEffect(() => {
        console.log('State updated ' + word)
    });

    return(
        <>
            <input type='text' onChange={(e) => {
                setWord(e.target.value);
            }} />
            <h1>Let's get the definition for {word}</h1>
        </>
    );

}

export default Dictionary;