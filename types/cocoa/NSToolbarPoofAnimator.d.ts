/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarPoofAnimator<T0 = void, T1 = void, T2 = void> extends NSObject {
    runPoof<R = void>(): R;
    _doPoof<R = void, P0 = number>(__doPoof: P0): R;
    _doCallback<R = void>(): R;
    dealloc<R = void>(): R;
    initAtPoint_withSize_callbackInfo<R = unknown, P0 = CGPoint, P1 = CGSize, P2 = unknown>(_initAtPoint: P0, _withSize: P1, _callbackInfo: P2): R;
    selfRetainedPoof<R = NSToolbarPoofAnimator>(): R;
    setSelfRetainedPoof<R = void, P0 = NSToolbarPoofAnimator>(_v: P0): R;
  }
  namespace NSToolbarPoofAnimator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSToolbarPoofAnimator>(): R;
      new: <R = NSToolbarPoofAnimator>() => R;
      runPoofAtPoint<R = void, P0 = CGPoint>(_runPoofAtPoint: P0): R;
      runPoofAtPoint_withSize_callbackInfo<R = void, P0 = CGPoint, P1 = CGSize, P2 = unknown>(_runPoofAtPoint: P0, _withSize: P1, _callbackInfo: P2): R;
    }
  }
}

declare const NSToolbarPoofAnimator: cocoa.NSToolbarPoofAnimator.CLASS;
