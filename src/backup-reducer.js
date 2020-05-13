//只是把state以及它的操作提取到store中。
var reducer = function (state, action) {
    if (!state) {
        state = {
            title: "这是redux初始化的标题",
            content: "这是第一个内容"
        }
    }
    //根据action 返回相应的state
    switch (action.type) {
        case 'CHANGE_TITLE':
            state = {
                ...state,
                title: action.newTitle
            };
            break;
        default:
            break;
    }
    return state;
}
export default reducer

//下一个
const initState = {
    title: '分类'
}
export function homeReducer(state = initState, action){

    return state;
}


// var store = createStore(reducer);
// var mapStateToProps = function (state, ownProps) {
//     return {
//         title: state.title,
//         content: state.content
//     }
// }
// var mapDispatchToProps = function (dispatch, ownProps) {
//     return {
//         changeTitle: function () {
//             dispatch({ type: 'CHANGE_TITLE', newTitle: '新的 按钮的title' });
//         }
//     }
// }
// var App1 = connect(mapStateToProps, mapDispatchToProps)(App);