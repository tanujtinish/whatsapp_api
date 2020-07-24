import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from '../reducers/';
import createSagaMiddleware from 'redux-saga'
// import mySaga from '../saga/sagas'

const sagaMiddleware = createSagaMiddleware()

const persisitedState = {
	setInfo: sessionStorage.setInfo?JSON.parse(sessionStorage.setInfo):{},
}

export default createStore(rootReducer,persisitedState,applyMiddleware(thunk,logger,sagaMiddleware))

//sagaMiddleware.run(mySaga)
