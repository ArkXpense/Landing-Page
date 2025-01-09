import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

// Fallback UI for when an error occurs
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="p-4 bg-red-100 text-red-800">
      <h2 className="text-xl font-bold">Something went wrong:</h2>
      <p>{error.message}</p>
    </div>
  );
}

// Function to log errors (you can integrate with Sentry, etc.)
function logErrorToService(error: Error, info: { componentStack: string }) {
  console.error("Logged Error:", error, info);
}

// ErrorBoundary Component
const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      // onError={logErrorToService}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
