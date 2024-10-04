import React, {useEffect, useRef, useState} from 'react';
import {useHorizontalScroll, useOnScreen, useWindowSize} from "./MainSite";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';


const Pictures = ({pictures, lang}) => {
    const [width, height] = useWindowSize();
    const [open, setOpen] = useState(false);
    const [photo, setPhoto] = useState(null);

    const scrollRef = useHorizontalScroll();

    const scrollStartRef = useRef(null);
    const isScrollStartVisible = useOnScreen(scrollStartRef);

    const scrollEndRef = useRef(null);
    const isScrollEndVisible = useOnScreen(scrollEndRef);

    const [thisInterval, setThisInterval] = useState(null);

    document.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37:
                handleModalLeft();
                break;
            case 39:
                handleModalRight();
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        newWidth();
    }, [width, height, pictures])

    const newWidth = () => {
        let count = 0;

        const interval = setInterval(() => {
            const el = document.getElementsByClassName('photo-container');
            const imgs = document.getElementsByClassName('photo-images');

            if (el.length > 0) {
                for (let i = 0; i < el.length; i++) {
                    el[i].style.minWidth = (imgs[i].offsetWidth) + 'px';
                }
            }

            count++;

            if (el.length === imgs.length) {
                clearInterval(interval);
            }

            if (count > 50) {
                clearInterval(interval);
            }
        }, 1000)
    }

    const handleModalRight = (e) => {
        e.stopPropagation()
        let oldPictureIndex;

        pictures.forEach((picture, index) => {
            if (picture.id === photo.id) {
                oldPictureIndex = index;
            }
        })

        if (pictures.length >= (oldPictureIndex + 2)) {
            setPhoto(pictures[oldPictureIndex + 1]);
        } else {
            setPhoto(pictures[0]);
        }
    }

    const handleModalLeft = (e) => {
        e.stopPropagation()
        let oldPictureIndex;

        pictures.forEach((picture, index) => {
            if (picture.id === photo.id) {
                oldPictureIndex = index;
            }
        })

        if (oldPictureIndex !== 0) {
            setPhoto(pictures[oldPictureIndex - 1]);
        } else {
            setPhoto(pictures[pictures.length - 1]);
        }
    }

    const handleScrollRight = () => {
        scrollRef.current.scrollBy({
            left: (scrollRef.current.offsetWidth / 2.2),
            behavior: "smooth"
        });

        const interval = setInterval(() => {
            scrollRef.current.scrollBy({
                left: (scrollRef.current.offsetWidth / 2.2),
                behavior: "smooth"
            });
        }, 500)

        setThisInterval(interval);
    }

    const handleScrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -(scrollRef.current.offsetWidth / 2.2),
            behavior: "smooth"
        });

        const interval = setInterval(() => {
            scrollRef.current.scrollBy({
                left: -(scrollRef.current.offsetWidth / 2.2),
                behavior: "smooth"
            });
        }, 500)

        setThisInterval(interval);
    }

    const openModal = (photo) => {
        setPhoto(photo);
        setOpen(true);
    }

    const clearCurrentInterval = () => {
        if (thisInterval) {
            clearInterval(thisInterval);
            setThisInterval(null);
        }
        ;
    }

    const handleClose = (e) => {
        e.stopPropagation();

        if (e.target.id !== 'modal-img' && e.target.id !== 'modal-left-arrow' && e.target.id !== 'modal-right-arrow') {
            setOpen(false);
        }
    }

    return (
        <>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100dvh'}}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        p: 3,
                        backgroundColor: 'rgba(0,0,0,0)',
                        border: 'none',
                        height: '100dvh',
                        width: '100%'
                    }}
                    className="modal-sheet"

                >
                    <div style={{height: '100%', width: '100%'}} id="modal-close" onClick={e => handleClose(e)}>
                        {
                            photo && (<>
                                <div className="modal-img-container">
                                    <div id="modal-left-arrow" style={{display: 'flex'}}
                                         className="video-scroll-button modal-left" onClick={e => handleModalLeft(e)}>
                                        <ArrowBackIosIcon/>
                                    </div>
                                    <img id="modal-img" src={`${process.env.REACT_APP_BACKEND_URL}/image/${photo.name}`}
                                         alt="modal-kirill" onWheel={handleModalRight}/>
                                    <div id="modal-right-arrow" style={{display: 'flex'}}
                                         className="video-scroll-button modal-right" onClick={e => handleModalRight(e)}>
                                        <ArrowBackIosIcon/>
                                    </div>
                                </div>
                                <div>
                                    <ModalClose variant="outlined" sx={{border: '1px solid rgb(100,100,100)'}}/>
                                    <Typography id="modal-desc" textColor="text.tertiary"
                                                sx={{textAlign: 'center', color: 'white', fontSize: '1vw'}}>
                                        {lang ? photo.description_eng : photo.description_ru}
                                    </Typography>
                                </div>
                            </>)
                        }
                    </div>
                </Sheet>
            </Modal>
            <div className="video-container-main">
                <div style={{display: isScrollStartVisible ? 'none' : 'flex'}}
                     className="video-scroll-button left"
                     onMouseDown={handleScrollLeft}
                     onMouseUp={clearCurrentInterval}
                     onMouseLeave={clearCurrentInterval}>
                    <ArrowBackIosIcon/>
                </div>
                <div className="video-container photo" ref={scrollRef}>
                    <div className="scroll-align" style={{minWidth: 1, height: "auto"}} ref={scrollStartRef}></div>
                    {pictures?.map((item, index) => {
                            return (<div className="photo-container scroll-align" key={index} style={{
                                     display: 'flex',
                                     flexDirection: 'column',
                                     textAlign: 'center',
                                     gap: 20}}

                                         onClick={() => openModal(item)}>
                                <img className="photo-images"
                                     src={`${process.env.REACT_APP_BACKEND_URL}/image/${item.name}`}
                                     alt="Фото Кирилла"
                                     loading="lazy"
                                />
                                <p>{lang ? item.description_eng : item.description_ru}</p>
                            </div>)
                        }
                    )}
                    <div className="scroll-align" style={{minWidth: 1, height: "auto"}} ref={scrollEndRef}></div>
                </div>
                <div style={{display: isScrollEndVisible ? 'none' : 'flex'}}
                     className="video-scroll-button right" onMouseDown={handleScrollRight}
                     onMouseUp={clearCurrentInterval} onMouseLeave={clearCurrentInterval}>
                    <ArrowBackIosIcon/>
                </div>
            </div>
        </>
    );
};

export default Pictures;