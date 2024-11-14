import React, { useRef, useState } from 'react';
import './VideoComponent.css'
import video from '/assets/video/meeting.mp4'
import { MdArrowLeft } from "react-icons/md";
import { IoPauseSharp } from "react-icons/io5";

export default function VideoComponent() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <section className="video-section" data-aos="fade-up">
            <div className="video-wrapper position-relative">
                <video 
                    ref={videoRef}
                    src={video}
                    className="custom-video"
                ></video>
                <button 
                    className="custom-play-button"
                    onClick={togglePlay}
                >
                    {isPlaying ? <IoPauseSharp /> : <MdArrowLeft />}
                </button>
            </div>
        </section>
    );
}
