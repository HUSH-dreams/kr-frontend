import {TOGGLE_LANG} from "./actions";

const initialState = {
    eng: false,
    buttons: {
        send: 'Отправить',
        tickets: 'Билеты',
        map: 'Карта',
        info: 'Подробнее',
        archive: 'Показать прошедшие',
        scheduled: 'Показать запланированные'
    },
    inputs: {
        yourEmail: 'Ваша почта',
        yourName: 'Ваше имя',
        message: 'Сообщение'
    },
    selects: {
    },
    texts: {
        email: 'Почта для связи',
        sendEmail: 'Отправить письмо',
        schedule: 'Расписание',
        media: 'Медиа',
        bio: 'Биография',
        contacts: 'Контакты',
        noConcerts: 'Нет запланированных событий',
        scheduled: 'Запланированные события',
        past: 'Прошедшие события'
    },
    errors: {
    },
    engButtons: {
        send: 'Submit',
        tickets: 'Tickets',
        map: 'Map',
        info: 'Info',
        archive: 'Show past events',
        scheduled: 'Show scheduled events'
    },
    ruButtons: {
        send: 'Отправить',
        tickets: 'Билеты',
        map: 'Карта',
        info: 'Подробнее',
        archive: 'Показать прошедшие',
        scheduled: 'Показать запланированные'
    },
    engInputs: {
        yourEmail: 'Your email',
        yourName: 'Your name',
        message: 'Message'
    },
    ruInputs: {
        yourEmail: 'Ваша почта',
        yourName: 'Ваше имя',
        message: 'Сообщение'
    },
    engSelects: {
    },
    ruSelects: {
    },
    engTexts: {
        email: 'Contact email',
        sendEmail: 'Send email',
        schedule: 'Schedule',
        media: 'Media',
        bio: 'Bio',
        contacts: 'Contacts',
        noConcerts: 'No concerts scheduled',
        scheduled: 'Scheduled events',
        past: 'Past events'
    },
    ruTexts: {
        email: 'Почта для связи',
        sendEmail: 'Отправить письмо',
        schedule: 'Расписание',
        media: 'Медиа',
        bio: 'Биография',
        contacts: 'Контакты',
        noConcerts: 'Нет запланированных событий',
        scheduled: 'Запланированные события',
        past: 'Прошедшие события'
    },
    engErrors: {
    },
    ruErrors: {
    }
}

const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LANG:
            return {
                ...state,
                buttons: state.eng ? state.ruButtons : state.engButtons,
                inputs: state.eng ? state.ruInputs : state.engInputs,
                selects: state.eng ? state.ruSelects : state.engSelects,
                texts: state.eng ? state.ruTexts : state.engTexts,
                eng: !state.eng,
            }
        default:
            return state
    }
}

export default langReducer;