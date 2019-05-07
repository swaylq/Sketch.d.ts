/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsWindowTransformAnimationGroup<T0 = void, T1 = void, T2 = void> extends NSAnimation {
    _stopAnimation_withDisplayLink<R = void, P0 = number, P1 = unknown>(__stopAnimation: P0, _withDisplayLink: P1): R;
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    startAnimation<R = void>(): R;
    dealloc<R = void>(): R;
    initWithAnimations<R = unknown, P0 = unknown>(_initWithAnimations: P0): R;
    _screen<R = unknown>(): R;
    completionHandler<R = CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace NSDocumentRevisionsWindowTransformAnimationGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAnimation {
      alloc<R = NSDocumentRevisionsWindowTransformAnimationGroup>(): R;
      new: <R = NSDocumentRevisionsWindowTransformAnimationGroup>() => R;
    }
  }
}

declare const NSDocumentRevisionsWindowTransformAnimationGroup: cocoa.NSDocumentRevisionsWindowTransformAnimationGroup.CLASS;
