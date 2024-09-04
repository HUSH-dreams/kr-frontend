import React, {useEffect, useRef, useState} from 'react';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useHorizontalScroll, useOnScreen} from "./MainSite";
import {useWindowSize} from "./MainSite";

const Scroll = ({videos, lang}) => {
    const [width, height] = useWindowSize();

    const scrollRef = useHorizontalScroll();

    const scrollStartRef = useRef(null);
    const isScrollStartVisible = useOnScreen(scrollStartRef);

    const scrollEndRef = useRef(null);
    const isScrollEndVisible = useOnScreen(scrollEndRef);

    const [thisInterval, setThisInterval] = useState(null);

    useEffect(() => {
        newWidth();
    },[width, height, videos])

    const newWidth = () => {
        const el = document.getElementsByClassName('video-wrapper');

        if (el.length > 0) {
            for (let i=0; i < el.length; i++){
                el[i].style.minWidth = (el[i].offsetHeight * 1.45)+'px';
            }
        }
    }

    const handleScrollRight = () => {
        scrollRef.current.scrollBy({
            left: (scrollRef.current.offsetWidth / 2.5),
            behavior: "smooth"
        });

        const interval = setInterval(() => {
            scrollRef.current.scrollBy({
                left: (scrollRef.current.offsetWidth / 1.5),
                behavior: "smooth"
            });
        }, 500)

        setThisInterval(interval);
    }

    const handleScrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -(scrollRef.current.offsetWidth / 2.5),
            behavior: "smooth"
        });

        const interval = setInterval(() => {
            scrollRef.current.scrollBy({
                left: -(scrollRef.current.offsetWidth / 1.5),
                behavior: "smooth"
            });
        }, 500)

        setThisInterval(interval);
    }

    const clearCurrentInterval = () => {
        if (thisInterval) {
            clearInterval(thisInterval);
            setThisInterval(null);
        };
    }

    return (
        <div className="video-container-main">
            <div style={{display: isScrollStartVisible ? 'none' : 'flex'}}
                 className="video-scroll-button left"
                 onMouseDown={handleScrollLeft}
                 onMouseUp={clearCurrentInterval}
                 onMouseLeave={clearCurrentInterval}>
                <ArrowBackIosIcon/>
            </div>
            <div className="video-container" ref={scrollRef}>
                <div className="scroll-align" style={{minWidth: 1, height: "auto"}} ref={scrollStartRef}></div>
                <script async defer src="https://www.youtube.com/iframe_api"></script>
                {
                    videos?.map(video => {
                        const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
                        const match = video.link.match(regExp);
                        const videoId = match&&match[1].length===11 ? match[1] : false;

                        return <div className="video-wrapper scroll-align" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            gap: 20
                        }}>
                            <iframe className="video"
                                    loading="lazy"
                                    src={video.link}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen></iframe>
                            {/*srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,*/}
                            {/*           span{position:absolute;width:100%;top:0;bottom:0;margin:auto}*/}
                            {/*           span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;*/}
                            {/*           text-shadow:0 0 0.5em black}</style><a href=*/}
                            {/*${video.link}><img src=https://img.youtube.com/vi/${videoId}/hqdefault.jpg*/}
                            {/*alt='alt'><span>▶</span></a>`}*/}
                            <a href={video.link} className="video-link">{lang ? video.description_eng : video.description_ru}</a>
                        </div>
                    })
                }
                <div className="scroll-align" style={{minWidth: 1, height: "auto"}} ref={scrollEndRef}></div>
            </div>
            <div style={{display: isScrollEndVisible ? 'none' : 'flex'}}
                 className="video-scroll-button right" onMouseDown={handleScrollRight} onMouseUp={clearCurrentInterval} onMouseLeave={clearCurrentInterval}>
                <ArrowBackIosIcon/>
            </div>
        </div>
    );
};

export default Scroll;