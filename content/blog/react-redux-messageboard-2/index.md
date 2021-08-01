---
title: 學習Redux — 2 — 更新留言訊息
cover: ./0_VxR_oAY332hgViPe.png
date: "2016-03-13"
description: "每次學習新東西都是寫Todo list實在太無趣了，這是我個人redux學習紀錄：使用react與redux開發一個留言板，並且把相關程式碼放在github上供參考"
categories: "coding"
tags: ["react","redux","js","javascript","front-end","前端"]
---

![](./0_al5XR9miDNZkHDbF.png)

## 由View 觸發onChange, 更新使用者名稱還有留言

* 開啟 ./src/containers/MsgModals.js

```
    ...
    /*更新使用者名稱*/
    onChange={this._onChange().user}

    ...
    /*更新留言*/
    onChange={this._onChange().message}
```

### 撰寫_onChange() 事件:

```
    _onChange = (e) => {
            const { updateUser, updateMsg } = this.props;
            return {
                user : (e) => {
                    /*更新user name輸入欄位*/
                    updateUser(e.target.value);
                },
                message: (e) => {
                    /*更新message輸入欄位*/
                    updateMsg(e.target.value);
                }
            };
        }
```

### Actions:

* 開啟 ./src/actions/index.js

這邊都只是把payload 直接回傳新的物件

```
    /* Modal: 更改 user 名稱 */
    export const updateUser = (user) => {
        return {
            type : types.UPDATE_USER,
            user,
        };
    };

    /* Modal: 更改 message */
    export const updateMsg = (message) => {
        return {
            type   : types.UPDATE_MESSAGE,
            message,
        };
    };
```

### dispatch 發送到 reducer:

* 開啟 ./src/reducers/madals.js

```
    switch (action.type) {
            case types.TOGGLE_MODAL:
                return {
                    ...state,
                    visible: action.visible
                };
            case types.UPDATE_USER:
                return {
                    ...state,
                    user   : action.user
                };
            case types.UPDATE_MESSAGE:
                return {
                    ...state,
                    message: action.message
                };
            default:
                return state;
        };
```

當 action.type === ‘UPDATE_USER’
 回傳新的state 裡面的user 是action 傳進來的值
 當 action.type === ‘UPDATE_MESSAGE’
 回傳新的state 裡面的message 是action 傳進來的值

*Originally published at [github.com](https://github.com/justin3737/redux-message-board/issues/4).*


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