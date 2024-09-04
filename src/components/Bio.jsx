import React, {useEffect} from 'react';

const Bio = ({isVisible, htmlContent, lang}) => {
    const update = () => {
        if (htmlContent) {
            document.getElementById('bio-content').innerHTML = "";
            const e = document.createElement('div');
            e.innerHTML = lang ? htmlContent.text_eng : htmlContent.text_ru;
            const bioContainer = document.getElementById('bio-content');
            bioContainer.appendChild(e);
        }
    }

    useEffect(() => {
        update();
    },[isVisible, htmlContent, lang])

    return (
        <div id="bio-content" className="bio-container">
        </div>
    );
};

export default Bio;