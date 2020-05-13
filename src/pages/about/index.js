import React, { Component } from 'react'
import { connect } from 'react-redux'
import UI from './About'

class Index extends Component {
    render() {
        return <UI {...this.props} />;
    }
}

const mapStateToProps = ({ about }) => {
    return {
        title: about.title,
        content: about.content
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);