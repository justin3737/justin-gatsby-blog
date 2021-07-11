
# 學習Redux — Redux留言板 :3 — 按下[確認] 新增留言

View 觸發dispatch addList()

* 開啟 ./src/containers/MsgModals.js

* 這裡透過 _handleOk() 觸發 addList(message, user)

    _handleOk = () => {
            const { user, message, addList, toggleModal } = this.props;
            addList(message, user);
            toggleModal(false);
        }

## Actions

* 開啟 ./src/actions/index.js

來看一下addList 這個actions

    /* List: 加入留言列表 */
    export const addList = (message, user) => {
        return {
            type: types.ADD_LIST,
            message,
            user
        };
    };

## Reducers

* 開啟 ./src/reducers/lists.js

* 準備一個list() 這邊只有回傳給 lists reducer 每一筆留言的物件

* 增加一筆留言時回傳的物件內容

- id: 留言id

- message: 留言內容

- user: 使用者

- user_id: 使用者id (大寫)

- time: 留言時間

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

* 來看一下 lists reducer, 這裡回傳新的留言陣列 array

* 記得初始值 state = [], 要給空的陣列避免發生錯誤

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

*Originally published at [github.com](https://github.com/justin3737/redux-message-board/issues/10).*
