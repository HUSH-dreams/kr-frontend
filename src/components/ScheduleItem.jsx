import React, {useRef, useState} from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import InfoIcon from '@mui/icons-material/Info';
import Sheet from "@mui/joy/Sheet";
import Modal from "@mui/joy/Modal";
import MapIcon from '@mui/icons-material/Map';
import {useSelector} from "react-redux";
import {selectButtons} from "../store/lang/selectors";

const ScheduleItem = ({schedule, lang, isSmall}) => {
    const [open, setOpen] = useState(false);
    const [scheduleOpen, setScheduleOpen] = useState(false);
    const buttons = useSelector(selectButtons);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [size, setSize] = useState(0);
    const thisRef = useRef(null);
    const [isWider, setWider] = useState(false);

    // const getMeta = (url, cb) => {
    //     const img = new Image();
    //     img.onload = () => cb(null, img);
    //     img.onerror = (err) => cb(err);
    //     img.src = url;
    // };

    // useEffect(() => {
    //     update();
    // },[thisRef, size])
    //
    // useEffect(() => {
    //     update();
    // },[])
    //
    // const update = () => {
    //     setSize(thisRef.current.clientHeight);
    //
    //     getMeta(`${process.env.REACT_APP_BACKEND_URL}/schedule/image/${schedule.file_name}`, (err, img) => {
    //         if (size > 0) {
    //             let ratio = 0;
    //
    //             if (img.naturalWidth > img.naturalHeight) {
    //                 setWider(true);
    //                 ratio = img.naturalWidth / img.naturalHeight;
    //
    //                 setHeight(size);
    //                 setWidth(size * ratio);
    //             } else {
    //                 ratio = img.naturalHeight / img.naturalWidth;
    //
    //                 setWidth(size);
    //                 setHeight(size * ratio);
    //             }
    //         }
    //     });
    // }

    const handleInfo = (e) => {
        setOpen(true);
    }

    const handleClose = (e) => {
        e.stopPropagation();

        setOpen(false);
    }

    const handleCloseSchedule = (e) => {
        e.stopPropagation();

        setScheduleOpen(false);
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
                    <div style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center'}}
                         onClick={e => handleClose(e)}>
                        <div className="schedule-modal" style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/schedule/image/${schedule.file_name})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                            <div className="schedule-modal-blur">
                                {
                                    isSmall ? (<div className="schedule-modal-top">
                                        <div>
                                            <div className="schedule-modal-name">
                                                {
                                                    lang ? schedule.name_eng : schedule.name_ru
                                                }
                                            </div>
                                        </div>
                                        <div className="schedule-flex">
                                            <div>
                                                <div className="schedule-modal-place">
                                                    <FmdGoodIcon/>
                                                    <p>
                                                        {
                                                            lang ? schedule.place_eng : schedule.place_ru
                                                        }
                                                    </p>
                                                </div>
                                                <div className="schedule-modal-time">
                                                    <AccessTimeIcon/>
                                                    <p>
                                                        {
                                                            lang ? schedule.time : schedule.time
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="schedule-button-modal-container">
                                                {
                                                    schedule.yandex &&
                                                    <a href={schedule.yandex} target="_blank"
                                                       className="schedule-button-link"
                                                       onClick={e => e.stopPropagation()}>
                                                        <button className="schedule-button">
                                                            <MapIcon/>{buttons.map}
                                                        </button>
                                                    </a>
                                                }
                                                {
                                                    schedule.link &&
                                                    <a href={schedule.link} target="_blank" className="schedule-button-link"
                                                       onClick={e => e.stopPropagation()}>
                                                        <button className="schedule-button">
                                                            <ConfirmationNumberIcon/>{buttons.tickets}
                                                        </button>
                                                    </a>
                                                }
                                            </div>
                                        </div>
                                    </div>) : (<div className="schedule-modal-top">
                                            <div>
                                                <div className="schedule-modal-name">
                                                    {
                                                        lang ? schedule.name_eng : schedule.name_ru
                                                    }
                                                </div>
                                                <div className="schedule-modal-place">
                                                    <FmdGoodIcon/>
                                                    <p>
                                                        {
                                                            lang ? schedule.place_eng : schedule.place_ru
                                                        }
                                                    </p>
                                                </div>
                                                <div className="schedule-modal-time">
                                                    <AccessTimeIcon/>
                                                    <p>
                                                        {
                                                            lang ? schedule.time : schedule.time
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="schedule-button-container schedule-modal-place-time-right">
                                                {
                                                    schedule.yandex &&
                                                    <a href={schedule.yandex} target="_blank"
                                                       className="schedule-button-link"
                                                       onClick={e => e.stopPropagation()}>
                                                        <button className="schedule-button">
                                                            <MapIcon/>{buttons.map}
                                                        </button>
                                                    </a>
                                                }
                                                {
                                                    schedule.link &&
                                                    <a href={schedule.link} target="_blank" className="schedule-button-link"
                                                       onClick={e => e.stopPropagation()}>
                                                        <button className="schedule-button">
                                                            <ConfirmationNumberIcon/>{buttons.tickets}
                                                        </button>
                                                    </a>
                                                }
                                            </div>
                                        </div>)
                                }
                                <div className="schedule-modal-bottom">
                                    {
                                        lang ? schedule.description_eng : schedule.description_ru
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Sheet>
            </Modal>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={scheduleOpen}
                onClose={() => setScheduleOpen(false)}
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
                    <div style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center'}}
                         onClick={e => handleCloseSchedule(e)}>
                        <div className="modal-img-container">
                            <img id="modal-schedule-img"
                                 src={`${process.env.REACT_APP_BACKEND_URL}/schedule/image/${schedule.file_name}`}
                                 alt="modal-kirill"/>
                        </div>
                    </div>
                </Sheet>
            </Modal>
            <div className="schedule-item">
                <div className="schedule-item-left">
                    <div className="schedule-item-img" ref={thisRef}>
                        {/*<div style={{*/}
                        {/*    background: `url(${process.env.REACT_APP_BACKEND_URL}/schedule/image/${schedule.file_name})`,*/}
                        {/*    backgroundSize: 'cover',*/}
                        {/*    backgroundPosition: 'center',*/}
                        {/*    height: isWider ? '100%' : height,*/}
                        {/*    width: isWider ? width : '100%'*/}
                        {/*}} onClick={() => setScheduleOpen(true)}>*/}
                        {/*</div>*/}
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/schedule/image/${schedule.file_name}`} alt=""
                             onClick={() => setScheduleOpen(true)}/>
                    </div>
                    <p className="schedule-item-name">
                        {
                            lang ? schedule.name_eng : schedule.name_ru
                        }
                    </p>
                    <div className="schedule-item-place-time">
                        <div className="schedule-item-place">
                            <FmdGoodIcon/>
                            <p>
                                {
                                    lang ? schedule.place_eng : schedule.place_ru
                                }
                            </p>
                        </div>
                        <div className="schedule-item-time">
                            <AccessTimeIcon/>
                            <p>
                                {
                                    lang ? schedule.time : schedule.time
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="schedule-button-container">
                    <button className="schedule-button" onClick={e => handleInfo(e)}>
                        <InfoIcon/>{buttons.info}
                    </button>
                    {
                        schedule.link &&
                        <a href={schedule.link} target="_blank" className="schedule-button-link">
                            <button className="schedule-button">
                                <ConfirmationNumberIcon/><span>{buttons.tickets}</span>
                            </button>
                        </a>
                    }
                </div>
            </div>
        </>
    );
};

export default ScheduleItem;