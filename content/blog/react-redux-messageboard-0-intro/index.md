---
title: 學習Redux — Redux留言板實作功能介紹
cover: ./0_VxR_oAY332hgViPe.png
date: "2016-03-10"
description: "每次學習新東西都是寫Todo list實在太無趣了，這是我個人redux學習紀錄：使用react與redux開發一個留言板，並且把相關程式碼放在github上供參考"
categories: "coding"
tags: ["react","redux","js","javascript","front-end","前端"]
---

> 每次學習新東西都是寫Todo list實在太無趣了，這是我個人redux學習紀錄：使用react與redux開發一個留言板，並且把相關程式碼放在github上供參考

git resource:
[**justin3737/redux-message-board**](https://github.com/justin3737/redux-message-board)

### 留言板操作功能說明

1. 使用ant design components 相關應用可以參考[官網說明](http://ant.design/)

1. 右上角按下[留言]的按鈕, 在modal內顯示留言的輸入框

![](./0_wYFG3Xn97vX78H43.png)

3. 更新留言訊息

![](./0_psY6TzVD6Z1DClxd.png)

4. 按下[確認] 新增留言

5. 留言列表更新

![](./0_VxR_oAY332hgViPe.png)

6. 只有自己可以刪除自己的留言（自己的留言才有[x]按鈕）

7. 按下[X] 跳出confirm視窗, 詢問是否刪除

![](./0_QcqIGZlpqWusobZy.png)


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