import ReactPlayer from "react-player";

const Video = ({video, playing}) => {
    const ytKey = video.results
        return (
            <div>
                {ytKey.length > 0 ?
                    <ReactPlayer
                    width="1500px"
                    height="1000px"
                    url={`https://www.youtube.com/embed/${ytKey[0].key}?autoplay=1`}
                    title="Youtube Player"
                    playing={playing}
                    frameBorder="0"
                    allowFullScreen
                    /> : <div></div>}
            </div>
        );
};

export {Video};