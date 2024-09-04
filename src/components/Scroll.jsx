import React, {useEffect, useRef, useState} from 'react';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useHorizontalScroll, useOnScreen} from "./Layout";
import '../style/Main.css'

const Scroll = () => {
    const [links, setLinks] = useState([]);

    const scrollRef = useHorizontalScroll();
    const videoScrollStartRef = useRef(null);
    const isVideoScrollStartVisible = useOnScreen(videoScrollStartRef);

    const videoScrollEndRef = useRef(null);
    const isVideoScrollEndVisible = useOnScreen(videoScrollEndRef);

    useEffect(() => {
        setLinks([
            "https://www.youtube.com/embed/va9OPq9BbXQ?si=tzUUmSD2PQXR3ouC",
            "https://www.youtube.com/embed/zoukB-_JfoA?si=yzlBqBdoHMawD3Hr",
            "https://www.youtube.com/embed/DTaTFWs9NIA?si=F2J2u_teN9cxEQBJ",
            "https://www.youtube.com/embed/i-JyZ7NUeuU?si=6LnY1pn-2rd9YZLV",
            "https://www.youtube.com/embed/rFRtJLmF5MA?si=_954bsVB4e3LFu3J",
            "https://www.youtube.com/embed/c_AYtOjWjGs?si=DC_988KBSaOEscf4"
        ]);
    }, [])

    const handleScrollRight = () => {
        scrollRef.current.scrollBy({
            left: 420,
            behavior: "smooth"
        });
    }

    const handleScrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -420,
            behavior: "smooth"
        });
    }

    return (
        <div className="video-container-main">
            <div style={{display: isVideoScrollStartVisible ? 'none' : 'flex'}}
                 className="video-scroll-button left" onClick={handleScrollLeft}>
                <ArrowBackIosIcon/>
            </div>
            <div className="video-container" ref={scrollRef}>
                <div style={{width: 1, height: "auto"}} ref={videoScrollStartRef}></div>
                {
                    links.map(thisLink => {
                        return <iframe className="video"
                                       src={thisLink}
                                       title="YouTube video player" frameBorder="0"
                                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                       referrerPolicy="strict-origin-when-cross-origin"
                                       allowFullScreen></iframe>
                    })
                }
                <div style={{width: 1, height: "auto"}} ref={videoScrollEndRef}></div>
            </div>
            <div style={{display: isVideoScrollEndVisible ? 'none' : 'flex'}}
                 className="video-scroll-button right" onClick={handleScrollRight}>
                <ArrowBackIosIcon/>
            </div>
        </div>
    );
};

export default VideoScroll;