import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
    import promise from 'redux-promise'
    import thunk from 'redux-thunk'
    import { persistReducer } from 'redux-persist'
    import storage from 'redux-persist/lib/storage'
    import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
    import { home, } from '@/reducer'
    // 我要对哪些state做数据持久化
    const rootPersistConfig = {
      key: 'root',
      storage: storage,
      stateReconciler: autoMergeLevel2,
    }

    // 单独为 某个 reduce 做数据持久化
    const myPersistReducer = combineReducers({
      // persistReducer 做数据持久化
      home: persistReducer(
        rootPersistConfig,
        home
      ),
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
      myPersistReducer,
      composeEnhancers(applyMiddleware(promise, thunk))
    )
    
    window.store=store

    export { store }