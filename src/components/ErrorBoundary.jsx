import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-red-50 p-8 font-mono text-red-900 flex flex-col items-start justify-start z-[9999] relative">
          <h1 className="text-2xl font-bold mb-4">🚨 Application Crash Detected</h1>
          <p className="text-lg font-bold bg-white p-4 rounded shadow-sm w-full border border-red-200">
            {this.state.error?.toString()}
          </p>
          <div className="mt-4 bg-white p-4 rounded shadow-sm w-full overflow-auto max-h-[60vh] border border-red-200">
            <h2 className="font-bold text-sm mb-2 text-red-500 uppercase">Component Stack Trace:</h2>
            <pre className="text-xs whitespace-pre-wrap">
              {this.state.errorInfo?.componentStack}
            </pre>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="mt-6 bg-red-600 text-white px-6 py-2 rounded font-bold hover:bg-red-700"
          >
            Reload Application
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
