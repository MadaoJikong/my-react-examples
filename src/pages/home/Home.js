import React, { Component } from 'react';
import { Button } from 'antd';

class Home extends Component {
    render() {
        return (
            <div>
                <Button type="primary" onClick={()=>this.props.changeTitle()}>{this.props.title}</Button>
            </div>
        );
    }
}
export default Home;