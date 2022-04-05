import { combineReducers } from 'redux'  //結合する機能
import { reducer as form } from 'redux-form'
import events from './events'  //count.jsからcountの状態を持つreducerをインポート

export default combineReducers({ events, form })   //countを結合・のちに他のファイルで使うためexport 使うreducerを引数に入れるだけで結合できる