import React from 'react';
import './RecommendationVideos.css';
import VideoCard from './VideoCard';

function RecommendationVideos(){
    
return (
    <div className="recommendedvideos">
        <h2>Recommended</h2>
        <div className="recommendationvideos_videos">
            <VideoCard title="Become a Web Developer in 10 minutes | 2019/2020"
                        views="2.3M Views"
                        timestamp="3 days ago"
                        channelImage="https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg"
                        channel="Sonny Sangha"
                        image="https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg"
            />
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>

        </div>
    </div>
);
}
export default RecommendationVideos;