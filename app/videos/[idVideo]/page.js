import { videoList } from "@/config";


function Video ({params}) {
    console.log(params)

    const title = videoList.find(video => video.id == params.idVideo)?.title ?? "Video not found"

    return (
        <div>
            Video: {title}

        </div>
    );
}

export default Video;
