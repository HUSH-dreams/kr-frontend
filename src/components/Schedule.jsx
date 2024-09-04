import React, {useEffect, useState} from 'react';
import ScheduleItem from "./ScheduleItem";
import {useSelector} from "react-redux";
import {selectButtons, selectTexts} from "../store/lang/selectors";

const Schedule = ({schedule, lang, isSmall}) => {
    const texts = useSelector(selectTexts);
    const buttons = useSelector(selectButtons);
    const [isCurrent, setCurrent] = useState(true);

    let scheduled = [];
    let archive = [];

    const today = new Date();

    if (schedule[0]) {
        schedule.forEach((sched, index) => {
            const eventTime = schedule[index].time;

            if (eventTime) {
                const date = eventTime.split(' ');

                if (date.length > 1) {
                    const separatedDate = date[0].split('.');

                    if (separatedDate.length > 2) {
                        const dateObject = new Date(+separatedDate[2], separatedDate[1] - 1, +separatedDate[0]);

                        dateObject.setHours(date[1].split(':')[0]);

                        sched.realTime = dateObject;
                    }
                } else {
                    sched.realTime = 0;
                }
            } else {
                sched.realTime = 0;
            }

            if (today > sched.realTime) {
                archive.push(sched);
            } else {
                scheduled.push(sched);
            }
        })
    }

    const toShow = isCurrent ? scheduled : archive;

    toShow.sort((a,b) => isCurrent ? new Date(a.realTime) - new Date(b.realTime)
        : new Date(b.realTime) - new Date(a.realTime));

    useEffect(() => {

    },[lang])

    console.log('toShow: ', toShow);

    const handleToggle = () => {
        setCurrent(!isCurrent);
    }

    return (
        <>
            <div className="schedule-item-container">
                {
                    toShow[0] && (<div className="schedule-top">
                        <h3>{isCurrent? texts.scheduled : texts.past}</h3>
                    </div>)
                }
                <div className="schedule-wrapper">
                    {
                        toShow.length ? (
                            toShow.map(sched => (
                                <ScheduleItem schedule={sched} lang={lang} isSmall={isSmall}/>
                            ))
                        ) : (<>
                            <h2 className="schedule-placeholder-item">
                                {isCurrent ? texts.noConcerts : texts.bio}
                            </h2>
                        </>)
                    }
                </div>
                <div className="schedule-bottom"><button onClick={handleToggle}>{isCurrent ? buttons.archive : buttons.scheduled}</button></div>
            </div>
        </>
    );
};

export default Schedule;