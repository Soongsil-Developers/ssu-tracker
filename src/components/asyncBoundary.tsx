import { Suspense, Component } from "react";
import type { ComponentProps, ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

type AsyncErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

interface AsyncBoundaryProps extends Omit<ErrorBoundaryProps, "fallback"> {
  pendingFallback: ComponentProps<typeof Suspense>["fallback"];
  rejectedFallback: AsyncErrorBoundaryProps["fallback"];
}

function AsyncBoundary({
  pendingFallback,
  rejectedFallback,
  children,
  ...errorBoundaryProps
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary fallback={rejectedFallback} {...errorBoundaryProps}>
      <Suspense fallback={pendingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
