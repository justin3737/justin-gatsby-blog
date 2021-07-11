
# 學習Redux — Redux留言板 :5 — 只有自己可以刪除自己的留言（自己的留言才有[x]按鈕）

留言列表的user_id 與留言者的 user_id 相同

* modals user_id === lists user_id

* ex: ‘JUSTIN’ === ‘JUSTIN’

* user_id 由 user 的字串轉大寫: toUpperCase()

Reducers (Store)的設計：

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

* 開啟 ./src/components/ListItems.js

* 這裡透過 css classname 來決定是否要顯示 [x] 按鈕

    _setClassName = () => {
        const { user_id, curr_user } = this.props;
        return classNames('itemWrap', ((user_id === curr_user) ? 'is-my-msg' : ''));
    }

*Originally published at [github.com](https://github.com/justin3737/redux-message-board/issues/5).*
