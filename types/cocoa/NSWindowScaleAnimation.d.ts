/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowScaleAnimation<T0 = void, T1 = void, T2 = void> extends NSAnimation {
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    startAnimation<R = void>(): R;
    dealloc<R = void>(): R;
    _screen<R = unknown>(): R;
    tag<R = number>(): R;
    setTag<R = void, P0 = number>(_v: P0): R;
    endScale<R = number>(): R;
    setEndScale<R = void, P0 = number>(_v: P0): R;
    startScale<R = number>(): R;
    setStartScale<R = void, P0 = number>(_v: P0): R;
    window<R = NSWindow>(): R;
    setWindow<R = void, P0 = NSWindow>(_v: P0): R;
  }
  namespace NSWindowScaleAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAnimation {
      alloc<R = NSWindowScaleAnimation>(): R;
      new: <R = NSWindowScaleAnimation>() => R;
    }
  }
}

declare const NSWindowScaleAnimation: cocoa.NSWindowScaleAnimation.CLASS;
