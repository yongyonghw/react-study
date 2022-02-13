import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    };

    componentDidCatch(error:any, info:any) {
        console.log('에러가 발생했습니다.');
        console.log({
            error,
            info
        });
        this.setState({
            error: true
        });
    }

    render() {
        console.log("Render Test");
        if (this.state.error) {
            return <h1>에러 발생!</h1>;
        }
        console.log(this.props.children)
        return this.props.children;
    }
}

export default ErrorBoundary;