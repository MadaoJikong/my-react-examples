//只是把state以及它的操作提取到store中。
var reducer = function (state, action) {
    if (!state) {
        state = {
            title: "home",
            content: "首页"
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