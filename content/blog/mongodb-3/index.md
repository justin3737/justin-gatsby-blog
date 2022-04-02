---
title: MongoDB學習筆記 - MongoDB Shell CRUD語法
date: "2022-03-31"
description: "這裡記錄了使用MongoDB作為資料庫，與雲端MongoDB Atlas操作記錄，在Jamstack的時代，Mongodb是非常普遍且主流的做法之一。"
categories: "coding"
tags: ["mongodb","js","node.js","javascript","back-end","後端","database","db","Jamstack"]
---
> 這裡記錄了使用MongoDB作為資料庫，與雲端MongoDB Atlas操作記錄，在Jamstack的時代，Mongodb是非常普遍且主流的做法之一。

- Shell語法主要用於終端機的操作
- 透過MongoDB shell語法去操作 MongoDB Server
- MongoDB 版本5.0
- 👉 [官網範例](https://www.mongodb.com/docs/manual/crud/)

![2022-03-31_1.png](./2022-03-31_1.png)

---


### 顯示資料庫

```bash
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
```

---


### 切換資料庫

```bash
> use [資料庫名稱]
switched to db [資料庫名稱]
```

---


### 插入一筆/多筆資料

- [db.collection.insertOne()](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/#mongodb-method-db.collection.insertOne)
- [db.collection.insertMany()](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertMany/#mongodb-method-db.collection.insertMany)



```bash
> db.rooms.insertOne({"rating":4.5,"price":1000,"name":"標準單人房"})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("62452ea200215a13d32151f4")
}
```

使用Compass GUI 查看本地端DB

![2022-03-31_2.png](./2022-03-31_2.png)


---


### 更新與取代

- [db.collection.updateOne()](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/#mongodb-method-db.collection.updateOne)
- [db.collection.updateMany()](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany/#mongodb-method-db.collection.updateMany)
- [db.collection.replaceOne()](https://www.mongodb.com/docs/manual/reference/method/db.collection.replaceOne/#mongodb-method-db.collection.replaceOne)



```bash
> db.rooms.updateOne(
    {
     "_id": ObjectId("62455ea400215a13d32151f6")
    },
    { $set:
      {
        "name": "豪華單人房限定版",
        "rating": 4.3
      }
    }
)
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

- 找到並且修改一筆成功

```bash
> db.rooms.updateMany(
    {
     "rating": 4.3
    },
    { $set:
      {
        "rating": 4.0
      }
    }
)

{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
```

- 找到並且修改兩筆成功

- replaceOne() 會取代整個資料結構，不用寫$set

```bash
> db.rooms.replaceOne(
  {
   "name": "標準單人房"
  },
  {
    "name": "標準單人房升級版"
  }
)

{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

![2022-03-31_3.png](./2022-03-31_3.png)

- 除了name以外其他屬性都沒了


---


### 刪除

- [db.collection.deleteOne()](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/#mongodb-method-db.collection.deleteOne)
- [db.collection.deleteMany()](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteMany/#mongodb-method-db.collection.deleteMany)

- 刪除一筆

```bash
> db.rooms.deleteOne(
  {
   "_id": ObjectId("62455ea400215a13d32151f7")
  }
)

{ "acknowledged" : true, "deletedCount" : 1 }
```

- 刪除多筆

```bash
> db.rooms.deleteMany(
  {
   "rating": 4
  }
)

{ "acknowledged" : true, "deletedCount" : 2 }
```

---

### 練習用JSON

```bash
[
    {
        "rating": 4.5,
        "price": 1000,
        "name": "標準單人房",
        "payment":["信用卡","ATM"]
    },
    {
        "rating": 4.3,
        "price": 1500,
        "name": "豪華單人房",
        "payment":["信用卡","ATM"]
    },
    {
        "rating": 4.8,
        "price": 2000,
        "name": "標準雙人房",
        "payment":["信用卡","ATM"]
    },
    {
        "rating": 4.7,
        "price": 2500,
        "name": "豪華雙人房",
        "payment":["ATM"]
    },
    {
        "rating": 4.0,
        "price": 3000,
        "name": "標準四人房",
        "payment":["現金"]
    },
    {
        "rating": 3.5,
        "price": 10000,
        "name": "總統套房",
        "payment":["現金"]
    }
]
```


---

### MongoDB 相關文章：
- <a href="/blog/mongodb-1/">MongoDB學習筆記 - 安裝啟動與GUI軟體</a><br/>
- <a href="/blog/mongodb-2/">MongoDB學習筆記 - 註冊帳號，並申請MongoDB Atlas雲端主機服務流程</a><br/>
- <a href="/blog/mongodb-3/">MongoDB學習筆記 - MongoDB Shell CRUD語法</a><br/>
- <a href="/blog/mongodb-4">MongoDB學習筆記 - MongoDB Shell - 搜尋語法</a><br/>
