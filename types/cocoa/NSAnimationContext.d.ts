/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAnimationContext<T0 = void, T1 = void, T2 = void> extends NSObject {
    endPerformanceMeasurementForIdentifier<R = void, P0 = unknown>(_endPerformanceMeasurementForIdentifier: P0): R;
    beginPerformanceMeasurementForIdentifier<R = void, P0 = unknown>(_beginPerformanceMeasurementForIdentifier: P0): R;
    setAllowsAsynchronousAnimation<R = void, P0 = boolean>(_setAllowsAsynchronousAnimation: P0): R;
    allowsAsynchronousAnimation<R = boolean>(): R;
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
    isExplicit<R = boolean>(): R;
    isImplicit<R = boolean>(): R;
    isActive<R = boolean>(): R;
    completionHandler<R = CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    timingFunction<R = CAMediaTimingFunction>(): R;
    setTimingFunction<R = void, P0 = CAMediaTimingFunction>(_v: P0): R;
    duration<R = number>(): R;
    setDuration<R = void, P0 = number>(_v: P0): R;
    allowsImplicitAnimation<R = boolean>(): R;
    setAllowsImplicitAnimation<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSAnimationContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAnimationContext>(): R;
      new: <R = NSAnimationContext>() => R;
      runAnimationGroup_completionHandler<R = void, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(_runAnimationGroup: P0, _completionHandler: P1): R;
      runAnimationGroup<R = void, P0 = CDUnknownBlockType>(_runAnimationGroup: P0): R;
      endGrouping<R = void>(): R;
      beginGrouping<R = void>(): R;
      flush<R = void>(): R;
      activate<R = void>(): R;
      currentContext<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      initialize<R = void>(): R;
      _runWithPreCommitCompletionHandlerAnimationGroup_completionHandler<R = void, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(__runWithPreCommitCompletionHandlerAnimationGroup: P0, _completionHandler: P1): R;
      completionHandlerSuspension<R = unknown>(): R;
      _hasActiveGrouping<R = boolean>(): R;
      addCommitHandler<R = void, P0 = CDUnknownBlockType>(_addCommitHandler: P0): R;
    }
  }
}

declare const NSAnimationContext: cocoa.NSAnimationContext.CLASS;
