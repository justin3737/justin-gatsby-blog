---
title: MongoDB學習筆記 - MongoDB Shell - 搜尋語法
date: "2022-03-31"
description: "這裡記錄了使用MongoDB作為資料庫，與雲端MongoDB Atlas操作記錄，在Jamstack的時代，Mongodb是非常普遍且主流的做法之一。"
categories: "coding"
tags: ["mongodb","js","node.js","javascript","back-end","後端","database","db","Jamstack"]
---
> 這裡記錄了使用MongoDB作為資料庫，與雲端MongoDB Atlas操作記錄，在Jamstack的時代，Mongodb是非常普遍且主流的做法之一。

- MongoDB 版本5.0

### 一般搜尋

- db.集合名稱(collections name).find()
- 尋找對應屬性：db.collections.find({屬性名稱:屬性值})
- 數值區間：db.collections.find({屬性名稱:{$lte:400}})
- 複合條件：db.collections.find({屬性名稱:{$lte:400},rating:{$gte:4.8}})
- 關鍵字搜尋：db.rooms.find({"name":/雙/})

---

### 常用語法

- project 保護欄位：db.rooms.find({"name":/雙/},{"_id":0})
- 搜尋陣列裡面的值：db.rooms.find({"payment":{$in:["信用卡"]}})


- $eq 等於
- $ne 不等於
- $gt  大於
- $lt  小於
- $gte  大於等於
- $lte  小於等於
- $in  存在某個值
- $nin  不存在某個值


---


## Example

### 尋找單筆或多筆

- [db.collection.find()](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/#mongodb-method-db.collection.find)

- [db.collection.findOne()](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/) 通常用於找ID

```bash
> db.rooms.find()
{ "_id" : ObjectId("62452f3200215a13d32151f5"), "rating" : 4.5, "price" : 1000, "name" : "標準單人房" }
```

- 多個條件：評價大於等於4.7，金額小於等於2000

```bash
> db.rooms.find(
  {
   "rating": {
      $gte: 4.7
   },
   "price": {
      $lte: 2000
   }
  }
)

{ "_id" : ObjectId("6245768e00215a13d32151fe"), "rating" : 4.8, "price" : 2000, "name" : "標準雙人房", "payment" : [ "信用卡", "ATM" ] }
```

- 保護特定資料，例如ID

```bash
> db.rooms.find(
  {
   "rating": {
      $gte: 4.7
   }
  },
  {
    "_id": 0
  }
)

{ "rating" : 4.8, "price" : 2000, "name" : "標準雙人房", "payment" : [ "信用卡", "ATM" ] }
{ "rating" : 4.7, "price" : 2500, "name" : "豪華雙人房", "payment" : [ "ATM" ] }
```

- 查找陣列內的內容
- $in 像是 or 的感覺 符合一項即可撈出來

```bash
> db.rooms.find(
  {
    "payment":  {
      $in:  ["信用卡"]
    }
  }
)

{ "_id" : ObjectId("6245768e00215a13d32151fc"), "rating" : 4.5, "price" : 1000, "name" : "標準單人房", "payment" : [ "信用卡", "ATM" ] }
{ "_id" : ObjectId("6245768e00215a13d32151fd"), "rating" : 4.3, "price" : 1500, "name" : "豪華單人房", "payment" : [ "信用卡", "ATM" ] }
{ "_id" : ObjectId("6245768e00215a13d32151fe"), "rating" : 4.8, "price" : 2000, "name" : "標準雙人房", "payment" : [ "信用卡", "ATM" ] }
```

- 使用Compass GUI 查找範例

![2022-03-31.png](./2022-03-31.png)

---

### MongoDB 相關文章：
- <a href="/blog/mongodb-1/">MongoDB學習筆記 - 安裝啟動與GUI軟體</a><br/>
- <a href="/blog/mongodb-2/">MongoDB學習筆記 - 註冊帳號，並申請MongoDB Atlas雲端主機服務流程</a><br/>
- <a href="/blog/mongodb-3/">MongoDB學習筆記 - MongoDB Shell CRUD語法</a><br/>
- <a href="/blog/mongodb-4">MongoDB學習筆記 - MongoDB Shell - 搜尋語法</a><br/>
