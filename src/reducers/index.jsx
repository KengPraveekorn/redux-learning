import { combineReducers } from 'redux'  // เปรียบเสมือนรวบรวม store

import { itReducer } from './itReducer'
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
    user: userReducer,
    it: itReducer
})


export default rootReducer