/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowTabMergeAnimation<T0 = void, T1 = void, T2 = void> extends NSAnimation {
    cxx_destruct<R = void>(): R;
    _stopAnimation_withDisplayLink<R = void, P0 = number, P1 = unknown>(__stopAnimation: P0, _withDisplayLink: P1): R;
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    _doAnimationWork<R = void>(): R;
    _finished<R = void>(): R;
    run<R = void>(): R;
    initWithWindows_targetTabFrames_targetWindow_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_initWithWindows: P0, _targetTabFrames: P1, _targetWindow: P2, _completionHandler: P3): R;
  }
  namespace NSWindowTabMergeAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAnimation {
      alloc<R = NSWindowTabMergeAnimation>(): R;
      new: <R = NSWindowTabMergeAnimation>() => R;
    }
  }
}

declare const NSWindowTabMergeAnimation: cocoa.NSWindowTabMergeAnimation.CLASS;
