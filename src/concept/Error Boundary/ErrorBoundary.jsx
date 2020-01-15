//catch the error and display the fallback UI
//componentDidCatch logs the error information
//getDerivedStateFromError renders fallback UI

//It do not catch error on Event handlers

import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something Went Wrong</h2>
        }
        return this.props.children
    }
}

export default ErrorBoundary

