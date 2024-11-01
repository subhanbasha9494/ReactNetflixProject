import lang from "../utils/languageConstant";

const GPTSearchBar = () => {
    return (
        <div className="pt-[10%] flexx justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12">
                <input type="text" className="p-4 m-4 col-span-9" placeholder={lang.tel.gpSearchPlaceholder} />
                <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
                    {lang.tel.search}
                </button>
            </form>
        </div>
    )
}
export default GPTSearchBar;