
# 學習Redux — Redux留言板 :4 — 留言列表更新



## 取得state 傳入元件的 props

* 開啟 ./src/containers/List.js

這邊要用到的 state 是 state.lists
 我們透過react-redux 提供的connect方法 
 把 state, dispatch 提供給 List 元件 當props使用

    export default connect(
        state => ({
            lists : state.lists,    /*這裡拿到state 的 lists */
            modals: state.modals
        }),
        dispatch => bindActionCreators({
            delList
        }, dispatch)
    )(List);

可以試著render()裡面把 lists 印出來

    render() {
        console.log(this.props.lists);
        ...
    }

接著透過map() 把所有的留言內容印出來

    <ul className="list-ul">
        {
            lists.map(info =>
                <ListItems 
                    key={info.id}
                    {...info}
                />
            )
        }
     </ul>

*Originally published at [github.com](https://github.com/justin3737/redux-message-board/issues/9).*
