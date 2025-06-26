import React, { Component } from 'react'

export default class ErrorBoundries extends Component {
  // constructor(props){
  //   super(props);
  //   this.state ={isError : false}
  // }

    state ={
        error : ''
    }

   static getDerivedStateFromError(error) {
    // Update state to show fallback UI
      return { error : error}
  }

    componentDidCatch(error, info) {
    // Log error to monitoring tools (e.g., Sentry)
    console.error("Error caught by ErrorBoundary:", error);
     console.error("Info:", info);
  }

  render() {
        if (this.state.error) {
          return (
            <div>
              <h2>⚠️ Error occurred</h2>
              <button onClick={() => window.location.reload()}>Reload</button>
            </div>
          );
}

    return  this.props.children
  }
}
