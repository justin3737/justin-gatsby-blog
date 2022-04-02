---
title: MongoDB學習筆記 - 註冊帳號，並申請MongoDB Atlas雲端主機服務流程
date: "2022-03-30"
description: "這裡記錄了使用MongoDB作為資料庫，與雲端MongoDB Atlas操作記錄，在Jamstack的時代，Mongodb是非常普遍且主流的做法之一。"
categories: "coding"
tags: ["mongodb","js","node.js","javascript","back-end","後端","database","db","Jamstack"]
---
> 這裡記錄了使用MongoDB作為資料庫，與雲端MongoDB Atlas操作記錄，在Jamstack的時代，Mongodb是非常普遍且主流的做法之一。

### MongoDb 雲端資料庫

- MongoDb Atlas [官網網址](https://www.mongodb.com/atlas/database)
- 選擇免費方案 AWS 最近的區域預設是香港，按下『Create Cluster』

![1.png](./1.png)

- 建立管理員驗證方式 username & password
- 稍後3-5分鐘

---
![2.png](./2.png)

- 到這一步就代表完成了

![3.png](./3.png)

---

### 使用Compass GUI來連線

- 按下『 connect 』

![4.png](./4.png)

- Add your Current IP Address

![5.png](./5.png)

- Add IP Address

![6.png](./6.png)

![7.png](./7.png)

- I have a MongoDB Compass

![8.png](./8.png)

- 複製連線網址

---

### 切換到Compass GUI

- 在欄位中貼上上面的網址，記得改密碼

![9.png](./9.png)

- 連線成功

![10.png](./10.png)

- 可以新增資料庫與集合
- Create Database

![11.png](./11.png)

- Add Data

![12.png](./12.png)

![13.png](./13.png)

- 建立完成如下

![14.png](./14.png)

- 回到 MongoDB Atlas
- 可以看到一筆，接著另外新增一筆，就有兩筆，如下

![15.png](./15.png)

- 回到Compass GUI 按一下刷新，同樣看到兩筆

![16.png](./16.png)

---

### 使用import json的方式

![17.png](./17.png)

![18.png](./18.png)

- 按下Apply，刷新MongoDB Atlas

![19.png](./19.png)

---

### MongoDB 相關文章：
- <a href="/blog/mongodb-1/">MongoDB學習筆記 - 安裝啟動與GUI軟體</a><br/>
- <a href="/blog/mongodb-2/">MongoDB學習筆記 - 註冊帳號，並申請MongoDB Atlas雲端主機服務流程</a><br/>
- <a href="/blog/mongodb-3/">MongoDB學習筆記 - MongoDB Shell CRUD語法</a><br/>
- <a href="/blog/mongodb-4">MongoDB學習筆記 - MongoDB Shell - 搜尋語法</a><br/>
