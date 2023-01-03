import React,{useState,useEffect} from 'react'
import "./Youtube.css"
export default function YouTube() {
    const[videos,setVideos]=useState([]);
    useEffect(()=>{
        fetch(
          " https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyCXvC6jwl0XMNW_xE-sEWShBDQwm9iJEmM&part=snippet%20&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date"
        )
        .then((resp)=>resp.json())
        .then((data)=>setVideos(data.items));
    },[]);
    console.log(videos);
 return (
    <>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className=" bold video-title-wrapper">Random Videos</div>
            </div>

            {videos.map((singleVideo) => {
              //get every single array value(object in this case) and map
              return (
                <div
                  key={singleVideo.id.videoId}
                  className="col-sm-12 col-md-6"
                >
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a
                        href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                        target="_blank"
                      >
                        {/*videolink ="www.youtube.com/watch?v=" + videoId  */}
                        {/* <img src={a} /> */}
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        {singleVideo.snippet.title}
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                      <div className="videoPublishingDate">
                        {singleVideo.snippet.publishedAt}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}













