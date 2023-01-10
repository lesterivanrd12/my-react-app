import ImgCarousel from "../Components/imgCarousel";
import TestAccordion from "../Components/TestAccordion";

export default function Home() {
    return (
        <>
            <h1>Welcome to Homepage</h1>
            <p>Click this <a href="/dictionary" target="_top">link</a> to try the dictionary.</p>
            
            <div className="flex">
                <div className="flex-1 w-32 m-2">
                    <TestAccordion />
                </div>
                <div className="flex-2 w-80 m-2">
                    <ImgCarousel />
                </div>
            </div>
        </>
    );
}





