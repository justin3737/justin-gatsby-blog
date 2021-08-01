---
title: 學習Redux — 5 只有自己可以刪除自己的留言（自己的留言才有[x]按鈕）
cover: ./0_VxR_oAY332hgViPe.png
date: "2016-03-16"
description: "每次學習新東西都是寫Todo list實在太無趣了，這是我個人redux學習紀錄：使用react與redux開發一個留言板，並且把相關程式碼放在github上供參考"
categories: "coding"
tags: ["react","redux","js","javascript","front-end","前端"]
---


每次學習新東西都是寫Todo list實在太無趣了，這是我個人redux學習紀錄：使用react與redux開發一個留言板，並且把相關程式碼放在github上供參考


留言列表的user_id 與留言者的 user_id 相同

* modals user_id === lists user_id

* ex: ‘JUSTIN’ === ‘JUSTIN’

* user_id 由 user 的字串轉大寫: toUpperCase()

Reducers (Store)的設計：
```
    modals:
    {
        visible:false,
        message:"", /*輸入時暫存的內容*/
        user:"Justin",
        user_id:"JUSTIN"
    }

    lists:
    [{
        id:3
        message:""  /*最後儲存的內容*/
        user:"Justin"
        user_id:"JUSTIN"
        time:"2016-3-8 10:50:38"
    }]
```
* 開啟 ./src/components/ListItems.js

* 這裡透過 css classname 來決定是否要顯示 [x] 按鈕

```
    _setClassName = () => {
        const { user_id, curr_user } = this.props;
        return classNames('itemWrap', ((user_id === curr_user) ? 'is-my-msg' : ''));
    }
```

*Originally published at [github.com](https://github.com/justin3737/redux-message-board/issues/5).*



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