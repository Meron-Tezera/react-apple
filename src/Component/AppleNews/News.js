import React, { useState,useEffect } from 'react'

// GET https://newsapi.org/v2/everything?q=Apple&from=2022-11-20&to=2022-11-30&sortby=publishedAt&pagesize=6&apiKey=5bd789c3338145f4a08ca8b338523fb7
export default function News() {
    const [news, setNews]= useState([])
useEffect(() => {
  fetch(
    "https://newsapi.org/v2/everything?q=Apple&from=2022-11-20&to=2022-11-30&sortby=publishedAt&pagesize=6&apiKey=5bd789c3338145f4a08ca8b338523fb7"
  )
  .then((resp)=>resp.json())
  .then((data)=>setNews(()=>data.articles))
  .catch(()=>alert("Not file found"));

  
}, [])
console.log(news);
  return (
    <div>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className=" bold video-title-wrapper">Latest News of November</div>
            </div>

            {news?.map((singleNews) => {
              //get every single array value(object in this case) and map
              return (
                <div key={singleNews.source.id} className="col-sm-12 col-md-6">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={singleNews.url} target="_blank">
                        {/*videolink ="www.youtube.com/watch?v=" + videoId  */}
                        {/* <img src={a} /> */}
                        <img src={singleNews.urlToImage} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        {singleNews.title}
                      </div>
                      <div className="videoDesc">
                        {singleNews.description}
                      </div>
                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
