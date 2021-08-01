---
title: 學習Redux — 3 按下[確認] 新增留言
cover: ./0_VxR_oAY332hgViPe.png
date: "2016-03-14"
description: "每次學習新東西都是寫Todo list實在太無趣了，這是我個人redux學習紀錄：使用react與redux開發一個留言板，並且把相關程式碼放在github上供參考"
categories: "coding"
tags: ["react","redux","js","javascript","front-end","前端"]
---

## View 觸發dispatch addList()

* 開啟 ./src/containers/MsgModals.js

* 這裡透過 _handleOk() 觸發 addList(message, user)
```
    _handleOk = () => {
            const { user, message, addList, toggleModal } = this.props;
            addList(message, user);
            toggleModal(false);
        }
```
## Actions

* 開啟 ./src/actions/index.js

來看一下addList 這個actions
```
    /* List: 加入留言列表 */
    export const addList = (message, user) => {
        return {
            type: types.ADD_LIST,
            message,
            user
        };
    };
```
## Reducers

* 開啟 ./src/reducers/lists.js

* 準備一個list() 這邊只有回傳給 lists reducer 每一筆留言的物件

* 增加一筆留言時回傳的物件內容

- id: 留言id

- message: 留言內容

- user: 使用者

- user_id: 使用者id (大寫)

- time: 留言時間

```
    const list = (state, action) => {
        switch (action.type) {
            case types.ADD_LIST:
                return {
                    id     : listId++,
                    message: action.message,
                    user   : action.user,
                    user_id: action.user.toUpperCase(),
                    time   : getNowTime()
                };
            default:
                return state;
        };
    };
```

* 來看一下 lists reducer, 這裡回傳新的留言陣列 array

* 記得初始值 state = [], 要給空的陣列避免發生錯誤
```
    const lists = (state = [], action) => {
        switch (action.type) {
            case types.ADD_LIST:
                return [
                    ...state,
                    list(undefined, action)
                ];
            default:
                return state;
        };
    };
```
*Originally published at [github.com](https://github.com/justin3737/redux-message-board/issues/10).*



<br/>
<hr/>
<br/>


### React Redux留言版相關文章：
- <a href="/blog/react-redux-messageboard-0-intro/">學習Redux — Redux留言板實作功能介紹</a><br/>
- <a href="/blog/react-redux-messageboard-1/">學習Redux — 1 右上角按下[留言]的按鈕, 在modal內顯示留言的輸入框(上)</a><br/>
- <a href="/blog/react-redux-messageboard-1-2/">學習Redux — 1 右上角按下[留言]的按鈕, 在modal內顯示留言的輸入框(下)</a><br/>
- <a href="/blog/react-redux-messageboard-2">學習Redux — 2 更新留言訊息</a><br/>
- <a href="/blog/react-redux-messageboard-3/">學習Redux — 3 按下[確認] 新增留言</a><br/>
- <a href="/blog/react-redux-messageboard-4/">學習Redux — 4 留言列表更新</a><br/>
- <a href="/blog/react-redux-messageboard-5/">學習Redux — 5 只有自己可以刪除自己的留言（自己的留言才有[x]按鈕）</a><br/>
- <a href="/blog/react-redux-messageboard-6/">學習Redux — 6 按下[X] 跳出confirm視窗, 詢問是否刪除</a><br/>
- <a href="/blog/react-redux-messageboard-7-practice/">學習Redux — Message-board app 練習題</a><br/>