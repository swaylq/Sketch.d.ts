/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarFullScreenResetableAnimation<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    invalidate<R = void>(): R;
    resetWithDuration_handler<R = void, P0 = number, P1 = CDUnknownBlockType>(_resetWithDuration: P0, _handler: P1): R;
    timerFired<R = void, P0 = unknown>(_timerFired: P0): R;
    completeImmediately<R = void>(): R;
    runForTime<R = void, P0 = number>(_runForTime: P0): R;
    initWithDuration_handler<R = unknown, P0 = number, P1 = CDUnknownBlockType>(_initWithDuration: P0, _handler: P1): R;
  }
  namespace NSToolbarFullScreenResetableAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSToolbarFullScreenResetableAnimation>(): R;
      new: <R = NSToolbarFullScreenResetableAnimation>() => R;
    }
  }
}

declare const NSToolbarFullScreenResetableAnimation: cocoa.NSToolbarFullScreenResetableAnimation.CLASS;
