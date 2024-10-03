import './BackgroundVideo.css'
import backVideo from './component/Bar.mp4'
import React, { useRef, useEffect, useState } from 'react';

const BackgroundVideo = () => {
    const videoRef = useRef(null);
    const [playbackRate, setPlaybackRate] = useState(0.7);
  
    useEffect(() => {
      const video = videoRef.current;
      if (video) {
        video.playbackRate = playbackRate;
      }
    }, [playbackRate]);
  
  return (
    <div>
      <div className='overlay'>
       <video ref={videoRef} src={backVideo} autoPlay loop muted />
      </div>
  </div>
  )
}

export default BackgroundVideo
