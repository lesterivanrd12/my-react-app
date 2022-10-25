import { useEffect, useState } from "react";

function Dictionary() {
    const [word, setWord] = useState('Hello');
    const [word2, setWord2] = useState('World');

    useEffect(() => {
        console.log('State updated ' + word)
    }, [word]);

    useEffect(() => {
        console.log('State updated ' + word2)
    }, [word2]);

    return(
        <>
            <input type='text' onChange={(e) => {
                setWord(e.target.value);
            }} />
            <h2>Let's get the definition for {word}</h2>
            <input type='text' onChange={(e) => {
                setWord2(e.target.value);
            }} />
            <h2>Let's get the definition for {word2}</h2>
        </>
    );

}

export default Dictionary;