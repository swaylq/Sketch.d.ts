/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollAnimationHelper<T0 = void, T1 = void, T2 = void> extends NSAnimationHelper {
    setIsScrollDueToUserAction<R = void, P0 = boolean>(_setIsScrollDueToUserAction: P0): R;
    setLogPerformanceAnalysis<R = void, P0 = boolean>(_setLogPerformanceAnalysis: P0): R;
    targetOrigin<R = CGPoint>(): R;
    changeDestinationToPoint<R = void, P0 = CGPoint>(_changeDestinationToPoint: P0): R;
    scrollToPoint<R = void, P0 = CGPoint>(_scrollToPoint: P0): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    _currentPoint<R = CGPoint>(): R;
    completionHandler<R = CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace NSScrollAnimationHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAnimationHelper {
      alloc<R = NSScrollAnimationHelper>(): R;
      new: <R = NSScrollAnimationHelper>() => R;
    }
  }
}

declare const NSScrollAnimationHelper: cocoa.NSScrollAnimationHelper.CLASS;
