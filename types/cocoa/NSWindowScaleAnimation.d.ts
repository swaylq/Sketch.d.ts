/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowScaleAnimation<T = any> extends cocoa.NSAnimation {
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    tag<R = number>(): R;
    setTag<R = void, P0 = number>(_v: P0): R;
    endScale<R = number>(): R;
    setEndScale<R = void, P0 = number>(_v: P0): R;
    startScale<R = number>(): R;
    setStartScale<R = void, P0 = number>(_v: P0): R;
    window<R = cocoa.NSWindow>(): R;
    setWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
  }
  namespace classes {
    export interface NSWindowScaleAnimation<T = any> extends cocoa.classes.NSAnimation {
      alloc<R = NSWindowScaleAnimation>(): R;
      new: <R = NSWindowScaleAnimation>() => R;
    }
  }
}

declare const NSWindowScaleAnimation: cocoa.classes.NSWindowScaleAnimation;
