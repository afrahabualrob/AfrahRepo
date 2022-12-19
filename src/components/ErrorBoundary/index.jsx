import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <>
          <h1>Something went wrong.</h1>
          <details>
            {this.state.error && this.state.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
