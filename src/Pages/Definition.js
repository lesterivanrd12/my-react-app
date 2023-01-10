import { useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router";
import {v4 as uuidv4} from 'uuid';
import { Link } from "react-router-dom";
import NotFound from "../Components/NotFound";
import DefinitionSearch from "../Components/DefinitionSearch";
import ServerError from "../Components/ServerError";

function Definition() {
    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false);
    const [serverError, setServerError] = useState(false);
    const navigate = useNavigate();
    let { search } = useParams();


    useEffect(() => {
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
        const url1 = 'http://httpstat.us/401';
        fetch(url)
            .then((response) => {
                console.log(response.status);
                if (response.status === 404) {
                    setNotFound(true);
                } else if (response.status === 401){
                    redirect('/login');
                } else if (response.status === 500) {
                    setServerError(true);
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
    } else if (serverError === true) {
        return (
            <>
                <ServerError />
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
                <p>Search More:</p>
                <DefinitionSearch />
                </>
            ) : null }
        </>
    );
}

export default Definition;

