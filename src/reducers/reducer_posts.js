// import React from 'react'
import { FETCH_POSTS } from '../actions/index'


const INITIAL_STATE = { all: [], post: null}


export default function(state = INITIAL_STATE, action) {
    console.log('---------------------')
    console.log('reducer action.type = ')
    console.log(action.type)
    switch(action.type) {
        case FETCH_POSTS:
            return { ...state, all: action.payload.data }
        default:
            return state
    }
}