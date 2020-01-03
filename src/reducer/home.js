import { DO_HOME } from '@/constants/actionTypes'

const initState = {
    loading: true,
    result: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case DO_HOME:
            return { ...state, loading: action.payload }
        case 'CESHI':
            return { ...state, result: action.payload }
        default:
            return state
    }
}