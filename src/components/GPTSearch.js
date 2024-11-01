import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg" alt="bgimg" />
            </div>
            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
    )
}
export default GPTSearch;