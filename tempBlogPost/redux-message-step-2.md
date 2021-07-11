
# 學習Redux — Redux留言板 :2 — 更新留言訊息



## 由View 觸發onChange, 更新使用者名稱還有留言

* 開啟 ./src/containers/MsgModals.js

    ...
    /*更新使用者名稱*/
    onChange={this._onChange().user}
    
    ...
    /*更新留言*/
    onChange={this._onChange().message}

###撰寫_onChange() 事件:

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

###Actions:

* 開啟 ./src/actions/index.js

這邊都只是把payload 直接回傳新的物件

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

## dispatch 發送到 reducer:

* 開啟 ./src/reducers/madals.js

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

當 action.type === ‘UPDATE_USER’
 回傳新的state 裡面的user 是action 傳進來的值
 當 action.type === ‘UPDATE_MESSAGE’
 回傳新的state 裡面的message 是action 傳進來的值

*Originally published at [github.com](https://github.com/justin3737/redux-message-board/issues/4).*
