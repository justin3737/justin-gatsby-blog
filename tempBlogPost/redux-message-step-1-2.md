
# 學習Redux — Redux留言板 :1 — 右上角按下[留言]的按鈕, 在modal內顯示留言的輸入框(下)

Store

* 在redux 中只有一個 store

* Redux 有提供 createStore() 的方法來做出store

單一reducers 建立 store：

    import { createStore } from 'redux';
    import msgApp from './reducers';
    const store = createStore(msgApp);

* 官方提供一個方法可以把多個reducer 結合在一起： combineReducers()

* 最後再交給 createStore() 處理

多個 reducers 時建立 store 的方式:

    import { combineReducers } from 'redux';
    import modals from './modals';
    import lists from './lists';
    
    const msgApp = combineReducers({
        modals,
        lists
    });

可以透過store.getState() 取回整個 state:

    const state = store.getState();

## 與View結合

* react-redux 提供了 Provider 元件與 connect 方法

* Provider 是使用在應用程式的根元件內，負責將唯一的 store 傳下去給其他子元件。

* 開啟 ./src/app.js

使用 Provider：

    import React from 'react';
    import { render } from 'react-dom';
    import { Provider } from 'react-redux';
    import msgApp from './reducers';
    import AppContainer from './containers/AppContainer';
    
    render(
        <Provider store={store}>
            <AppContainer />
        </Provider>,
        document.getElementById('root')
    );

使用 connect:

* 我們可以透過connet 把要用到的state, actions 綁定在元件裡

* 元件就可以拿到 props 來使用

來看一下redux官網提供的connect的[範例](https://github.com/reactjs/react-redux/blob/master/docs/api.md#inject-todos-and-a-specific-action-creator-addtodo)：

    import { addTodo } from './actionCreators'
    import { bindActionCreators } from 'redux'
    
    function mapStateToProps(state) {
      return { todos: state.todos }
    }
    
    function mapDispatchToProps(dispatch) {
      return bindActionCreators({ addTodo }, dispatch)
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)

## connect 使用ES6 的寫法

    export default connect(
        state => ({
             todos: state.todos
        }), 
        dispatch => bindActionCreators({ 
            addTodo 
        }, dispatch)
    )(TodoApp)

## 關於 bindActionCreators()

-可以傳入多個 actions 給元件當作 props 被使用
 例如:

    bindActionCreators({
        updateMsg,
        updateUser,
        addList
    }

*Originally published at [github.com](https://github.com/justin3737/redux-message-board/issues/3).*
