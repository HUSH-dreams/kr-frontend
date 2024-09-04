import React from 'react';
import ReactCountryFlag from "react-country-flag";
import {toggleLang} from "../store/lang/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectLang} from "../store/lang/selectors";

const Flags = () => {
    const dispatch = useDispatch();
    const lang = useSelector(selectLang);

    const handleLangChange = (e) => {
        if (e.target.id === 'lang-eng') {
            if (!lang) {
                dispatch(toggleLang());
            }
        } else {
            if (lang) {
                dispatch(toggleLang());
            }
        }

    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'row', width: 90, height: 'max-content'}}>
            <ReactCountryFlag style={{scale: '1.8 1.3', cursor: "pointer"}}
                              countryCode='RU'
                              svg
                              cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                              cdnSuffix="svg"
                              title='RU'
                              id='lang-ru'
                              onClick={handleLangChange}
            />
            <ReactCountryFlag style={{scale: '1.8 1.3', cursor: "pointer"}}
                              countryCode='GB'
                              svg
                              cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                              cdnSuffix="svg"
                              title='GB'
                              id='lang-eng'
                              onClick={handleLangChange}
            />
        </div>
    );
};

export default Flags;