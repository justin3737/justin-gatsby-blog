
# 學習Redux — Redux留言板 :6 — 按下[X] 跳出confirm視窗, 詢問是否刪除



## View

* 這裡用到ant design 的元件 Modal.confirm

* 寫法與js 的 confirm（） 很相似

* onOk() 裡面dispatch action: delList(id) 就完成了

    import { Modal } from 'antd';
    
    _onDel = (id) => {
        const confirm = Modal.confirm;
        const { delList } = this.props;
        confirm({
            title: '您是否確認要刪除留言?' ,
            onOk() {
                delList(id);
            },
            onCancel() {}
        });
    }

*Originally published at [github.com](https://github.com/justin3737/redux-message-board/issues/6).*
