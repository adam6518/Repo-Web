import { combineReducers } from 'redux'


const init = {
    id: '',
    username: '',
    password: '',
    role: ''

}

const initSearch = {
    keyword: ''
}

const AuthReducer = (state = init, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            // Akan menyalin property di state untuk kemudian di ubah 'id' dan 'username'
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                password: action.payload.password,
                role: action.payload.role

            }

        // Hilangkan id dan username
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                id: '',
                username: '',
                password: '',
                role: ''


            }

        default:
            return state
    }
}

const SearchReducer = (state = initSearch, action) => {
    switch (action.type) {
        case "SEARCH_SUCCESS":
            return { ...state, keyword: action.payload.keyword }
        default:
            return state

    }
}

const reducer = combineReducers(
    {
        auth: AuthReducer,
        filter: SearchReducer
    }
)

export default reducer