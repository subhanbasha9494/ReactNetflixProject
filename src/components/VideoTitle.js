const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <h1 className="py-6 text-lg w-1/4">{overview}</h1>
            <div className="">
                <button className="bg-white text-black p-4 px-16 text-xl rounded-lg">▶️ Play</button>
                <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-lg">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;