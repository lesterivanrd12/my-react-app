
export default function Clock() {
    return(
        <>
            <p>{new Date().toLocaleTimeString()}</p>
        </>
    );
}

setInterval(Clock, 1000);