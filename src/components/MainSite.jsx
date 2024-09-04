import React, {useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import Button from "./Button";
import {SocialIcon} from "react-social-icons";
import Scroll from "./Scroll";
import Pictures from "./Pictures";
import '../style/Main.css';
import 'react-social-icons/vimeo'
import Bio from "./Bio";
import Contacts from "./Contacts";
import Modal from "@mui/joy/Modal";
import {useDispatch, useSelector} from "react-redux";
import {
    selectBio,
    selectContacts,
    selectEmail,
    selectPictures,
    selectSchedule,
    selectSocials,
    selectVideos
} from "../store/content/selectors";
import {contentInitiate} from "../store/content/actions";
import {useNavigate, useParams} from "react-router-dom";
import Flags from "./Flags";
import {selectLang, selectTexts} from "../store/lang/selectors";
import Schedule from "./Schedule";

const useProgressiveImage = src => {
    const [sourceLoaded, setSourceLoaded] = useState(null)

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => setSourceLoaded(src)
    }, [src])

    return sourceLoaded
}

export function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = useMemo(() => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting)), [ref])

    useEffect(() => {
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return isIntersecting
}

export function useHorizontalScroll() {
    const elRef = useRef();

    useEffect(() => {
        const el = elRef.current;

        if (el) {
            const onWheel = e => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollBy({
                    left: e.deltaY < 0 ? (-el.offsetWidth / 2.2) : (el.offsetWidth / 2.2), behavior: "smooth"
                });
            };

            el.addEventListener("wheel", onWheel);

            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);

    return elRef;
}

const MainSite = () => {
    const lang = useSelector(selectLang);
    const name = lang ? 'Kirill Rusinov' : 'Кирилл Русинов';
    const bayan = lang ? 'bayan' : 'баян';
    const buttons = lang ? ['Main', 'Schedule', 'Media', 'Bio', 'Contacts'] : ['Главная', 'Афиша', 'Медиа', 'Биография', 'Контакты'];
    const texts = useSelector(selectTexts);
    const socials = useSelector(selectSocials);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {section} = useParams();
    const schedule = useSelector(selectSchedule);
    const bio = useSelector(selectBio);
    const email = useSelector(selectEmail);
    const contacts = useSelector(selectContacts);
    const pictures = useSelector(selectPictures);
    const videos = useSelector(selectVideos);

    const mainRef = useRef(null);
    const isMainVisible = useOnScreen(mainRef);

    const scheduleRef = useRef(null);
    const isScheduleVisible = useOnScreen(scheduleRef);

    const photoRef = useRef(null);
    const isPhotoVisible = useOnScreen(photoRef);

    const bioRef = useRef(null);
    const isBioVisible = useOnScreen(bioRef);

    // const shopRef = useRef(null);
    // const isShopVisible = useOnScreen(shopRef);

    const contactsRef = useRef(null);
    const isContactsVisible = useOnScreen(contactsRef);

    const [width, height] = useWindowSize();

    const [isSmall, setSmall] = useState(false);

    const [isOpened, setOpened] = useState(false);

    const mainLoaded = useProgressiveImage('/header1.jpg');
    const secondaryLoaded = useProgressiveImage('/secondary11.jpg');

    useEffect(() => {
        if (window.matchMedia('(max-device-width: 661px)').matches) {
            if (!isSmall) {
                setSmall(true);
            }
        } else {
            if (isSmall) {
                setSmall(false);
            }
        }
    }, [width])

    useEffect(() => {
        dispatch(contentInitiate());

        if (section) {
            const element = document.getElementById(section);

            element?.scrollIntoView({
                behavior: 'instant'
            });
        } else {
            navigate('/main');
        }
    }, [])

    useEffect(() => {
        if (isMainVisible) {
            navigate('/main');
        }
        if (isScheduleVisible) {
            navigate('/schedule');
        }
        if (isPhotoVisible) {
            navigate('/media');
        }
        if (isBioVisible) {
            navigate('/bio');
        }
        if (isContactsVisible) {
            navigate('/contacts');
        }
    }, [isMainVisible, isScheduleVisible, isPhotoVisible, isBioVisible, isContactsVisible])

    const handleClick = (e, name) => {
        e.preventDefault();

        let id = '';

        switch (name) {
            case 'Главная':
            case 'Main':
                id = 'main';
                break;
            case 'Афиша':
            case 'Schedule':
                id = 'schedule'
                break;
            case 'Медиа':
            case 'Media':
                id = 'media'
                break;
            case 'Биография':
            case 'Bio':
                id = 'bio'
                break;
            // case 'Магазин':
            //     id = 'shop'
            //     break;
            case 'Контакты':
            case 'Contacts':
                id = 'contacts'
                break;
            default:
                break;
        }

        navigate(`/${id}`);

        const element = document.getElementById(id);

        element?.scrollIntoView({
            behavior: isOpened ? 'instant' : 'smooth'
        });

        if (isOpened) {
            handleCloseMenu()
        }
    }

    const handleVisible = function (name) {
        let isItVisible = false;

        switch (name) {
            case 'Главная':
            case 'Main':
                isItVisible = isMainVisible;
                break;
            case 'Афиша':
            case 'Schedule':
                isItVisible = isScheduleVisible;
                break;
            case 'Медиа':
            case 'Media':
                isItVisible = isPhotoVisible;
                break;
            case 'Биография':
            case 'Bio':
                isItVisible = isBioVisible;
                break;
            // case 'Магазин':
            //     isItVisible = isShopVisible;
            //     break;
            case 'Контакты':
            case 'Contacts':
                isItVisible = isContactsVisible;
                break;
            default:
                break;
        }

        return isItVisible;
    }

    const handleOpenMenu = () => {
        setOpened(true);

        const id = setInterval(() => {
            if (document.getElementById('menu-icon-1') && document.getElementById('menu-icon-2')
                && document.getElementById('menu-icon-3')) {
                document.getElementById('menu-icon-1').style.transform = 'rotate(45deg) translate(9px,5px)';
                document.getElementById('menu-icon-2').style.width = '0px';
                document.getElementById('menu-icon-3').style.transform = 'rotate(-45deg) translate(9px,-5px)';

                clearInterval(id);
            }
        }, 40)
    }

    const handleCloseMenu = () => {
        document.getElementById('menu-icon-2').style.width = '35px';
        document.getElementById('menu-icon-1').style.transform = 'rotate(0deg) translate(0,0)';
        document.getElementById('menu-icon-3').style.transform = 'rotate(0deg) translate(0,0)';

        setTimeout(() => {
            setOpened(false);
        }, 100)
    }

    return (<>
        <div>
            <div>
                <div id="placeholder" className={mainLoaded && secondaryLoaded ? 'placeholder' : ''}>
                </div>
                <div className="page-container">
                    {
                        isSmall && (<div></div>)
                    }
                    <div className="secondary-img">
                        <div>

                        </div>
                    </div>
                    {
                        !isSmall ? (<div className="menu-social">
                            <div className="main-menu">
                                <div>
                                    {buttons.map(buttonName => {
                                        return <Button key={buttonName} click={(e) => handleClick(e, buttonName)}
                                                       isVisible={handleVisible(buttonName)}>{buttonName}</Button>
                                    })}
                                    <div><Flags/></div>
                                </div>
                            </div>
                        </div>) : (
                            <>
                                {
                                    !isOpened && (<div className="menu-icon-container">
                                        <div className="menu-icon" onClick={handleOpenMenu}>
                                            <div id="menu-icon1"></div>
                                            <div id="menu-icon2"></div>
                                            <div id="menu-icon3"></div>
                                        </div>
                                    </div>)
                                }
                                {
                                    isOpened && (<Modal
                                        aria-labelledby="modal-title"
                                        aria-describedby="modal-desc"
                                        open={isOpened}
                                        onClose={() => setOpened(false)}
                                        sx={{display: 'flex'}}
                                    >
                                        <div className="modal-focus">
                                            <div className="main-content">
                                                <div className="main-aside">
                                                    <div className="main-name" id="main-title" ref={mainRef}>
                                                        {name}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu-icon-container">
                                                <div className="menu-icon" onClick={handleCloseMenu}>
                                                    <div id="menu-icon-1"></div>
                                                    <div id="menu-icon-2"></div>
                                                    <div id="menu-icon-3"></div>
                                                </div>
                                            </div>
                                            <div className="menu-social">
                                                <div className="main-menu">
                                                    <div>
                                                        {buttons.map(buttonName => {
                                                            return <Button key={buttonName + 1}
                                                                           click={(e) => handleClick(e, buttonName)}
                                                                           isVisible={handleVisible(buttonName)}>{buttonName}</Button>
                                                        })}
                                                        <Flags/>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="main-social">
                                                <div>
                                                    {
                                                        socials && socials.map(social => {
                                                            return <SocialIcon url={social.link}
                                                                               target="_blank"
                                                                               fgColor='white'
                                                                               bgColor="rgba(0,0,0,0)"/>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="main-logo">
                                                <div style={{cursor: "pointer"}} onClick={(e) => handleClick(e, 'Main')}>
                                                    <span>К</span>
                                                    <span>Р</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal>)
                                }
                            </>

                        )
                    }
                    {
                        !isOpened && (<div className="main-logo">
                            <div style={{cursor: "pointer"}} onClick={(e) => handleClick(e, 'Main')}>
                                <span>К</span>
                                <span>Р</span>
                            </div>
                        </div>)
                    }
                    {
                        !isOpened && (<div className="main-social">
                            <div>
                                {
                                    socials && socials.map(social => (
                                        <SocialIcon url={social.link}
                                                    target="_blank"
                                                    fgColor='white'
                                                    bgColor="rgba(0,0,0,0)"/>
                                    ))
                                }
                            </div>
                        </div>)
                    }
                    <header className="page" id="main">
                        <div className="main-img">
                            <div className="main-content-container">
                                {
                                    !isOpened && (<div className="main-content">
                                        <div className="main-aside">
                                            <div className="main-name" id="main-title" ref={mainRef}>
                                                {name}
                                            </div>
                                            <div className="main-define">
                                                <div className="main-define-line">-</div>
                                                {bayan}
                                                <div className="main-define-line">-</div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                                <div className="center-of-page" ref={mainRef}></div>
                            </div>
                        </div>
                    </header>
                    <div className="page secondary-page" id="schedule">
                        <div id="schedule-container" className="secondary-page-container">
                            {
                                isSmall && (<h4>{texts.schedule}</h4>)
                            }
                            <Schedule schedule={schedule} lang={lang} isSmall={isSmall}/>
                            <div className="center-of-page" ref={scheduleRef}></div>
                        </div>
                    </div>
                    <div className="page secondary-page" style={{position: 'relative'}} id="media">
                        <div id="media-container" className="secondary-page-container">
                            {
                                isSmall && (<h4>{texts.media}</h4>)
                            }
                            <Scroll videos={videos} lang={lang}/>
                            <div className="center-of-page center-of-page-video" ref={photoRef}></div>
                            <Pictures isVisible={isPhotoVisible} pictures={pictures} lang={lang}/>
                        </div>
                    </div>
                    <div className="page secondary-page" id="bio">
                        <div id="kirillbio-container" className="secondary-page-container">
                            {
                                isSmall && (<h4>{texts.bio}</h4>)
                            }
                            <Bio isVisible={isBioVisible} htmlContent={bio} lang={lang}/>
                            <div className="center-of-page" ref={bioRef}></div>
                        </div>
                    </div>
                    {/*<div className="page secondary-page" id="shop">*/}
                    {/*    <div id="shop-container" className="secondary-page-container">*/}
                    {/*        <div></div>*/}
                    {/*        <div className="center-of-page" ref={shopRef}></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="page secondary-page" id="contacts">
                        <div id="contacts-container" className="secondary-page-container">
                            {
                                isSmall && (<h4>{texts.contacts}</h4>)
                            }
                            <Contacts socials={socials} thisEmail={email} htmlContent={contacts} lang={lang}/>
                            <div className="center-of-page" ref={contactsRef}></div>
                        </div>
                    </div>
                    <footer>
                    </footer>
                </div>
            </div>
        </div>
    </>);
};

export default MainSite;