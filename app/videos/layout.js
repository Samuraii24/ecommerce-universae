import { videoList } from "@/config";
import Link from "next/link";

export default function VideosLayout({ children }) {

    const videoMenu = videoList.map( video => <Link href={`/videos/${video.id}`}  key={video.id}>{video.title}</Link> )

  return (
    <div> 
        <div className="ml-32 px-8"> {children} </div>
          <div className="flex flex-col items-center justify-center absolute top-10 left-0 min-w-32">
            {videoMenu}
          </div>
    </div>
  );
}