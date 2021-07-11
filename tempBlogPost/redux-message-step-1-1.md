
# 學習Redux — Redux留言板 : 1 右上角按下[留言]的按鈕, 在modal內顯示留言的輸入框(上)

Redux data flow

![](https://cdn-images-1.medium.com/max/2000/0*CHV2iOx031MN6sAP.png)

## Actions

Action 在原生 Flux 和 redux 裡，都是一個告知 state 需要改變的物件。通常會長得像這樣：

    export const toggleModal = (visible) => {
        return {
            type   : 'TOGGLE_MODAL',
            visible
        };
    };

    /* 透過dipatch 來發送 action */ 
    dispatch(toggleModal(ture));

## Reducers

* Reducer 類似於原生 Flux 的 Store

* Redux 只有一個 Store

* Reducer 接收舊 state 與 action 並回傳一個新的 state

    (previousState, action) => newState

來看一下modals 的 reducers：

    /* 我們給一個state的初始值防止頁面初始值發生錯誤 */
    let initialState = {
        visible: false, /*初始值false, 所以是關閉的*/
    };
    
    const modals = (state = initialState, action) => {
        switch (action.type) {
            case 'TOGGLE_MODAL':
                return {
                    ...state,
                    visible: action.visible
                };
            default:
                return state;
        };
    };

當action.type = ‘TOGGLE_MODAL’時, 回傳新的 state
 其中 visible 被更改為 action.visible 傳進來的值 true
 故modal 被開啟了

*來看一下modals 的 view:

    const { visible } = this.props;
    return (
        <div>
            <Modal 
                title="請輸入留言訊息" 
                visible={visible}
                ...
            </Modal>
        </div>
    )

Reducers (Store)的設計：

    {
    modals : {
        visible:false,
        message:"", /*輸入時暫存的內容*/
        user:"Justin",
        user_id:"JUSTIN"
    },
    lists: [{
        id:3
        message:""  /*最後儲存的內容*/
        user:"Justin"
        user_id:"JUSTIN"
        time:"2016-3-8 10:50:38"
    }]
    }

*Originally published at [github.com](https://github.com/justin3737/redux-message-board/issues/2).*
