import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import NotFound from "../Components/NotFound";

function Definition() {
    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false);
    const navigate = useNavigate();
    let { search } = useParams();

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((response) => {
                if (response.status === 404) {
                    setNotFound(true);
                }
                return response.json()
            })
            .then((data) => {
                setWord(data[0].meanings)
                // console.log(data[0].meanings)
            });
    }, []);

    if(notFound === true) {
        return (
            <>
                <NotFound />
                <Link to="/dictionary">Search another</Link>
            </>
        )
    }

    return(
        <>
            {word ? (
                <>
                <h1>Here is the definition:</h1>
                {word.map((meaning) => {
                    return (
                        <p key={uuidv4()}>
                            {meaning.partOfSpeech + ': '}
                            {meaning.definitions[0].definition}
                        </p>
                    );
                })}
                {/* <Link to="/dictionary">Search more</Link> */}
                </>
            ) : null }
        </>
    );
}

export default Definition;

