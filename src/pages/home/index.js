import React, { Component } from 'react'
import { connect } from 'react-redux'
import UI from './Home'

class Index extends Component {
    render() {
        return <UI {...this.props} />;
    }
}

const mapStateToProps = ({ home }) => {
    return {
        title: home.title
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTitle: function () {
            dispatch({ type: 'CHANGE_TITLE', newTitle: '新的 按钮的title' });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);